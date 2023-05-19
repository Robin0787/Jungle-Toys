import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import MyToys from "../Pages/MyToys/MyToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

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
                path : "/details/:id",
                element: <ToyDetails />,
                loader: ({params}) => fetch(`http://localhost:2000/details/${params.id}`)
            },
            {
                path: "/all-toys",
                element: <AllToys />,
                loader: () => fetch('http://localhost:2000/all-toys')
            },
            {
                path: "/my-toys",
                element: <MyToys />
            },
            {
                path: "/add-toys",
                element: <AddToys />
            }
        ]
    }
])

export default Routes;