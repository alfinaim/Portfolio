import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Adventure from './pages/Adventure';
import Story from './pages/Story';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* Redirect from "/" to "/learn" */}
        <Route index element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
