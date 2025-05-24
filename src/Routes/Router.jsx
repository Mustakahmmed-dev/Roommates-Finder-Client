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
import MyListings from "../pages/MyListings";
import DetailsPage from "../pages/DetailsPage";
import UpdateDetails from "../pages/UpdateDetails";


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
            },
            {
                path: "my-listings",
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>
            },
            {
                path: "browse-listings/details/:id",
                loader: () => fetch('http://localhost:3000/posts'),
                element: <PrivateRoute>
                    <DetailsPage></DetailsPage>
                </PrivateRoute>,
            },
            {
                path: "my-listings/updateDetails/:id",
                loader: ({params}) => fetch(`http://localhost:3000/posts/${params.id}`),
                element: <PrivateRoute>
                    <UpdateDetails></UpdateDetails>
                </PrivateRoute>,
            },

        ]
    },
    {
        path: "about",
        element: <div>From about</div>
    }
])

