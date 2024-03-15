import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';

import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home/>
  </React.StrictMode>,
)
