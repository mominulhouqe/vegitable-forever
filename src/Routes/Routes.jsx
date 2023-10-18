import Main from "../Layout/Main";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProduct/Categories/AllProducts";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />  
            },
            {
                path:"categories",
                element:<AllProducts /> ,
            }
        ]
    }
])