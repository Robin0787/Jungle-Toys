import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from '../Pages/Login/Login';
import MyToys from "../Pages/MyToys/MyToys";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import SignUp from "../Pages/SIgnUp/SignUp";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";


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
                path: "/details/:id",
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:2000/details/${params.id}`)
            },
            {
                path: "/all-toys",
                element: <PrivateRoute><AllToys /></PrivateRoute>,
                loader: () => fetch('http://localhost:2000/all-toys')
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: "/add-toys",
                element: <PrivateRoute><AddToys /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: '/update-toy/:id',
                element: <UpdateToy />,
                loader: ({params}) => fetch(`http://localhost:2000/details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default Routes;