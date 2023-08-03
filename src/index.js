import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import { GlobalProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GlobalProvider> */}
    <BrowserRouter basename='/movie_app' >
      <App />
    </BrowserRouter>
    {/* </GlobalProvider> */}
  </React.StrictMode>
);

