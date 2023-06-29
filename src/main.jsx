import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Beranda from './pages/Beranda'
import Tentang from './pages/Tentang'
import App from './App.jsx'
import React from 'react'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Beranda/>,
      },
      {
        path: '/tentang',
        element:<Tentang/>,
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
