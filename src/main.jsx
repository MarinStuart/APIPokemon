import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { PokemonApp } from './PokemonApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <React.StrictMode>
        <PokemonApp/>
      </React.StrictMode>,
  </BrowserRouter>
)
