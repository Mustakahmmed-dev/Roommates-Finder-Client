import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <div>From child</div>
            }
        ]
    },
    {
        path: "about",
        element: <div>From about</div>
    }
])

