import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Others from "../Layout/Others";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import ContactUs from "../Pages/ContactUsPage/ContactUs/ContactUs";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/our-menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: '/',
        element: <Others></Others>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;