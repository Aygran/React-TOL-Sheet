import React from 'react'
import { createRoot } from 'react-dom/client';
import {AttributeScore} from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AttributeScore />
  </React.StrictMode>
);
