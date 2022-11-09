import React from 'react'
import ReactDOM from 'react-dom/client'

import {Home} from './pages/Home' // por padrão se não colocamos o nme do arquivo ele carrega o index.

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
