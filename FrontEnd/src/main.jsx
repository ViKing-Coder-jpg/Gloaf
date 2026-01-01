import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Pages/login.jsx'
import Signup from './Pages/signup.jsx'
import Layout from './Pages/Layouts/CustomerLayout.jsx'
import HomeLayout from './Pages/Layouts/HomeLayout.jsx'
import Home from './Pages/HomePages/Home.jsx'
import About from './Pages/HomePages/About.jsx'

const router=createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout />,
        children:[
            {
                path:'',
                element:<Home />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/signup',
        element:<Signup />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
