import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@smastrom/react-rating/style.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
