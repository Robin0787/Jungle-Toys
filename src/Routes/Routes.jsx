import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import MyToys from "../Pages/MyToys/MyToys";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/all-toys",
                element: <AllToys />
            },
            {
                path: "/my-toys",
                element: <MyToys />
            },
            {
                path: "/add-toys",
                element: <AddToys />
            },
        ]
    }
])

export default Routes;