import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './global.css'
import MainRoutes from './routes';
const root = ReactDOM.createRoot(document.getElementById('root'));

// O hook pode ser chamado diretamente antes de renderizar a aplicação


root.render(
  <BrowserRouter basename="/jdsyws">
    <MainRoutes />
  </BrowserRouter>
);