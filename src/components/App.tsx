import './App.css'   // CSS globale
import Headers from './Headers'
import Intro from './Intro'
import MovieManager from './MovieManager'



const App = () => {
  console.log("[App]")
  return (
    <>
      <Headers />
      <MovieManager />
      <Intro />
    </>
  )
}

export default App
