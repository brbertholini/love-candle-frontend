import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog';
import { Contact } from './pages/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Catalogo" Component={Catalog}/>
        <Route path="/Contato" Component={Contact}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
