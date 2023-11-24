import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Replace 'root' with your actual root element
root.render(<App />);
