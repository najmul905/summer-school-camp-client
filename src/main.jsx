import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './assets/Router/Router';

import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import AuthProvider from './Provider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider> 
    <div className='bg-blue-200'>
    <RouterProvider router={router} />
    </div>
      </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
