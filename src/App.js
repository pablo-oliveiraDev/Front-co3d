import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';
import GlobalStyle from './Style/globalstyles';
import Header from './Components/Header';



function App() {
  return (
    <BrowserRouter>
    <>
    <Header/>
    <ToastContainer autoClose={3500} theme='colored' />
    <Router/>
    <GlobalStyle/>
    
    </>
    </BrowserRouter >
  );
}

export default App;
