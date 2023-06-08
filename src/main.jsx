import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './assets/Router/Router';

import { HelmetProvider } from 'react-helmet-async';
import React from 'react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> <RouterProvider router={router} /></HelmetProvider>
  </React.StrictMode>,
)
