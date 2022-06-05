import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'photoswipe/dist/photoswipe.css'
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import './App.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <App />
)