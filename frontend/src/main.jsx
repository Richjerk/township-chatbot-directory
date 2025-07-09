// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home'; // replace with actual path
import RegisterUser from './pages/RegisterUser'; // replace with actual path
import RegisterBusiness from './pages/RegisterBusiness'; // replace with actual path
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
        {/* Add more routes as needed */}
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
