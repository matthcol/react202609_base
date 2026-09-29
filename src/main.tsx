import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'

const ContextCounter = createContext<number>(0)

createRoot(document.getElementById('root')!).render(
   // StructMode: utilisé en mode dev pour s'assurer que chaque
   //             composant est bien une fonction pure en l'appelant deux fois
   //             de suite au rendu
  <StrictMode>
    <ContextCounter.Provider value={1}>
      <App />
    </ContextCounter.Provider>
  </StrictMode>,
)

export {ContextCounter}
