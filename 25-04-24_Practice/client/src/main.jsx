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
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader:()=>fetch('http://localhost:3000/coffees')
  },
  {

    path:'/:id',
    element:<Details></Details>,
    loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
  },
  {
    path:'/add-coffee',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:'update-coffee/:id',
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
