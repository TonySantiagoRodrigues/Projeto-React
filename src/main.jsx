import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/global.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Tela from './views/Tela/Tela';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Tela />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
