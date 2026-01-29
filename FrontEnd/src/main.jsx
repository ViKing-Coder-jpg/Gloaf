import { createRoot } from 'react-dom/client'
import './index.css'
import { Suspense } from 'react'
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
import DashboardHome from './Pages/restaurant/Home/PartnerHome.jsx'
import Loading from './Pages/Loading.jsx'
import ChefPage from './Pages/customer/Chef/ChefPage.jsx'
import Menu from './Pages/restaurant/Menu/Menu.jsx'
import Order from './Pages/restaurant/Orders/Order.jsx'
import Review from './Pages/restaurant/Review/Review.jsx'
import Setting from './Pages/restaurant/Settings/Setting.jsx'
import Info from './Pages/restaurant/Analytics/Info.jsx'
import Notifications from './Pages/restaurant/Notifications/Notifications.jsx'
// import ProtectedRoutes from '../ProtectedRoutes.jsx'



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
            },
            {
                path: 'menu',
                element:<Menu />
            },
            {
                path: 'order',
                element:<Order />
            },
            {
                path: 'review',
                element:<Review />
            },
            {
                path: 'settings',
                element:<Setting />
            },
            {
                path: 'info',
                element:<Info />
            },
            {
                path: 'alert',
                element:<Notifications />
            },
            
        ]
    },
])

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading />} >
        <RouterProvider router={router}/>
    </Suspense>
)
