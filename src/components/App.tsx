import './App.css'   // CSS globale
import Headers from './Headers'
import Intro from './Intro'
import Movies from './Movies'


const App = () => {
  console.log("[App]")
  return (
    <>
      <Headers />
      <Movies />
      <Intro />
    </>
  )
}

export default App
