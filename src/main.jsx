import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '/src/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '/src/assets/tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
