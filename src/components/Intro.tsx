import { useState } from "react"
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './App.css'   // CSS globale

const days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

const Intro = () => {
    const [count, setCount] = useState(0)  // Hook React : commence par use
    const [jour, setJour] = useState(days[0])
    console.log(`[Intro] count=${count}, jour=${jour}`)

    // count++
    // setCount(12)

    const handleClickIncr = () => {
        console.log('[Click count] count prev:', count)
        setCount((count) => {
            // compute new value for next cycle
            const newCount = count + 1
            console.log('[Click count => setCount] new value', newCount)
            return newCount
            
        })  
        console.log('[Click count] count next:', count) // still ol value
    }

    const handleClickReset = () => {
        console.log('[Click Reset]')
        setCount(0)
    }

    const handleClickNextDay = () => {
        setJour((jour) => {
            const index = days.indexOf(jour)
            return days[(index + 1) % days.length]
        })
    }

    return (
        <>
            <section id="center">
            <div className="hero">
            <img src={heroImg} className="base" width="170" height="179" alt="" />
            <img src={reactLogo} className="framework" alt="React logo" />
            <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
            <h1>Programme du {jour}</h1>
            </div>
            <button
                type="button"
                className="counter"
                onClick={handleClickIncr}
            >
            Count is {count}
            </button>
            <button type="button" className="reset" onClick={handleClickReset}>Reset</button>
            <button type="button" className="reset" onClick={handleClickNextDay}>Next Day</button>
        </section>
        </>
    )
}

export default Intro