import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "register",
                element: <div>Register your account</div>
            },
            {
                path: "login",
                element: <div> Login into your account</div>
            }
        ]
    },
    {
        path: "about",
        element: <div>From about</div>
    }
])

