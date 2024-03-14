import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';

import { Catalog } from './pages/Catalog/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Catalog/>
  </React.StrictMode>,
)
