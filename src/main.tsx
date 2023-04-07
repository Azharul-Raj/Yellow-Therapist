import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast';
import DataProvider from './contexts/DataProvider/DataProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>    
    <Toaster/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
