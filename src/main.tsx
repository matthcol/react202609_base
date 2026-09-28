import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'


createRoot(document.getElementById('root')!).render(
   // StructMode: utilisé en mode dev pour s'assurer que chaque
   //             composant est bien une fonction pure en l'appelant deux fois
   //             de suite au rendu
  <StrictMode>
    <App />
  </StrictMode>,
)
