import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
)
// Page pré-rendue (production) : on « hydrate » ; en développement : rendu normal.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
