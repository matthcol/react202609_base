import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { MoviePlaylistContextProvider } from './contexts/MoviePlaylistContext'


const ContextCounter = createContext<number>(0)

// installHook.js:1 Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
// const ContextMoviePlayList = createContext(null)

createRoot(document.getElementById('root')!).render(
   // StructMode: utilisé en mode dev pour s'assurer que chaque
   //             composant est bien une fonction pure en l'appelant deux fois
   //             de suite au rendu
  <StrictMode>
    <ContextCounter.Provider value={1}>
      <MoviePlaylistContextProvider>
          <App />
      </MoviePlaylistContextProvider>
    </ContextCounter.Provider>
  </StrictMode>,
)

export {ContextCounter}
