import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import AddCoffe from './Pages/AddCoffe';
import UpdateCoffe from './Pages/UpdateCoffe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader:()=>fetch('http://localhost:3000/coffees')
  },
  {
    path:'/add-coffee',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:'update-coffee',
    element:<UpdateCoffe></UpdateCoffe>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
