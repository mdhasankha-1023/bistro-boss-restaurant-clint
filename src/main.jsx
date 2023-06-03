import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@smastrom/react-rating/style.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
