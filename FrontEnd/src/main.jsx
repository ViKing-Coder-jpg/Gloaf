import { createRoot } from 'react-dom/client'
import './index.css'
import { Suspense } from 'react'
import { RouterProvider} from 'react-router-dom'
import {router} from './router'
import Loading from './Pages/Loading.jsx'



createRoot(document.getElementById('root')).render(
    <Suspense fallback={<Loading />} >
        <RouterProvider router={router}/>
    </Suspense>
)
