import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import HomePage from "../Pages/HomePage/HomePage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import LocationPage from "../Pages/LocationPage/LocationPage";
import ContactPage from "../Component/ContactPage/ContactPage";

export const route = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path:"/menu",
                element: <MenuPage/>
            },
            {
                path:"/gallery",
                element: <GalleryPage/>
            },
            {
                path:"/about",
                element: <AboutPage/>
            },
            {
                path:"/contact",
                element: <ContactPage/>
            },
            {
                path:"/location",
                element: <LocationPage/>
            }
        ]
    }
])