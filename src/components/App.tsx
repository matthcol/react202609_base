import './App.css'   // CSS globale
import Headers from './Headers'
import Intro from './Intro'
import MovieManager from './MovieManager'
import Collapsible from './Collapsible'



const App = () => {
  console.log("[App]")
  return (
    <>
      <Headers />
      <Collapsible title="Movie Manager">
        <MovieManager />
      </Collapsible>
      <Collapsible title="Intro">
        <Intro />
      </Collapsible>
    </>
  )
}

export default App
