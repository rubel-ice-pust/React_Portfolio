import React from 'react';
// import './App.css';

import AppRoute from './router/AppRoute';
import { BrowserRouter } from 'react-router-dom';





function App() {
  return (
   <BrowserRouter> 
    <AppRoute/>
    </BrowserRouter>
   
  );
}

export default App;
