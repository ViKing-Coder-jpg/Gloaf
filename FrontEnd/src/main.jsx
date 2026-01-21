import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Pages/login.jsx'
import Signup from './Pages/signup.jsx'
import CustomerLayout from './Pages/Layouts/CustomerLayout.jsx'
import HomeLayout from './Pages/Layouts/HomeLayout.jsx'
import Home from './Pages/Home/HomePage/Home.jsx'
import About from './Pages/Home/AboutPage/About.jsx'
import CustomerHome from './Pages/customer/Home/CustomerHome.jsx'
import SearchPage from './Pages/customer/Search/SearchPage.jsx'
import OrderPage from './Pages/customer/Orders/OrderPage.jsx'
import PartnerLayout from './Pages/Layouts/PartnerLayout.jsx'
import DashboardHome from './Pages/restaurant/PartnerHome.jsx'
import Loading from './Pages/Loading.jsx'
import { Suspense } from 'react'
import ChefPage from './Pages/customer/Chef/ChefPage.jsx'




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
    },
    {
        path:'/customer',
        element:<CustomerLayout />,
        children:[
            {
                path: 'home',
                element:<CustomerHome />
            },
            {
                path:'collection',
                element:<SearchPage />
            },
            {
                path:'orders',
                element: <OrderPage />
            },
            {
                path:'chef',
                element: <ChefPage />
            },
        ]
    },
    {
        path:'/partner',
        element:<PartnerLayout />,
        children:[
            {
                path: 'home',
                element:<DashboardHome />
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading />} >
        <RouterProvider router={router}/>
    </Suspense>
)
