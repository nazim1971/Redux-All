import App from "@/App";
import Login from "@/pages/Login";
import Task from "@/pages/task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Task/>
            },
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