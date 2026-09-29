import './App.css'   // CSS globale
import Headers from './Headers'
import Intro from './Intro'
import MovieManager from './MovieManager'
import Collapsible from './Collapsible'
import MovieManagerReducer from './MovieManagerReducer'



const App = () => {
  console.log("[App]")
  return (
    <>
      <Headers />
      <Collapsible title="Movie Manager with Reducer only">
        <MovieManagerReducer />
      </Collapsible>
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
