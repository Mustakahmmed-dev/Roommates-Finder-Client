import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Loader from "../components/Loader";
import AddPost from "../pages/AddPost";
import PrivateRoute from "./PrivateRoute";
import BrowseListings from "../pages/BrowseListings";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <Loader></Loader>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "add-to-find-roommate",
                element: <PrivateRoute>
                    <AddPost></AddPost>
                </PrivateRoute>
            },
            {
                path: "browse-listings",
                element: <PrivateRoute>
                    <BrowseListings></BrowseListings>
                </PrivateRoute>
            }
        ]
    },
    {
        path: "about",
        element: <div>From about</div>
    }
])

