import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Pages/signup.jsx'
import ImageSlider from './Components/ImageSlider.jsx'
import Login from './Pages/login.jsx'


createRoot(document.getElementById('root')).render(
    <Login />
)
