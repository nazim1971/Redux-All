import App from "@/App";
import Login from "@/pages/login";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'users',
                element: <User/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])
 

export default routes;