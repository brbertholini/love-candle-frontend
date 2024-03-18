import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global';

import { Cart } from './pages/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Cart/>
  </React.StrictMode>,
)
