import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@material-tailwind/react';
import Layout from '../public/Layout/Layout.jsx';
import SignIn from '../public/Pages/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/signin',
        element:<SignIn></SignIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
