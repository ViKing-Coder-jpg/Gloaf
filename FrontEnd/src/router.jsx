
import {createBrowserRouter} from 'react-router-dom'
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
import ChefPage from './Pages/customer/Chef/ChefPage.jsx'
import Menu from './Pages/restaurant/Menu/Menu.jsx'
import Order from './Pages/restaurant/Orders/Order.jsx'
import Review from './Pages/restaurant/Review/Review.jsx'
import Setting from './Pages/restaurant/Settings/Setting.jsx'
import Info from './Pages/restaurant/Analytics/Info.jsx'
import Notifications from './Pages/restaurant/Notifications/Notifications.jsx'
import CartPage from './Pages/customer/Cart/CartPage.jsx'
import Profile from './Pages/customer/Profile/Profile.jsx'
import AddressPage from './Pages/customer/Address/AddressPage.jsx'
import ErrorPage from './Pages/Error Pages/ErrorPage.jsx'
import AuthProvider from './Functions/TokenAuthorizer.jsx'



export const  router=createBrowserRouter([
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
        ],
        errorElement:<ErrorPage/>
        
    },
    {
        path:'/login',
        element:<Login />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/signup',
        element:<Signup />,
        errorElement:<ErrorPage/>
    },
    {
        path:'/customer',
        element:
            <AuthProvider >
                <CustomerLayout />
                </AuthProvider>
            ,
        errorElement:<ErrorPage/>,
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
            {
                path:'cart',
                element: <CartPage />
            },
            {
                path:'profile',
                element: <Profile />
            },
            {
                path:'address',
                element: <AddressPage />
            },
        ]
    },
    {
        path:'/partner',
        element:
        <PartnerLayout />
        ,
        errorElement:<ErrorPage/>,
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
