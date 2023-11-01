import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import ProfileLayout from './components/ProfileLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileLayout />
  </React.StrictMode>
);
