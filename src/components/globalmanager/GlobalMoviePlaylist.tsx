import styles from './GlobalMoviePlaylist.module.css'
import GlobalMovieCard from "./GlobalMovieCard"
import useMoviePlaylist from "../../hooks/useMoviePlaylist"
import { useMemo, useState } from 'react'

const GlobalMoviePlaylist = () => {
    const [displayCard, setDisplayCard] = useState(true)
    const {moviePlaylist, dispatch} = useMoviePlaylist()  // TODO: utiliser le custom hook dans les autres composants
    
    const [totalHours, totalMinutes] = useMemo(
        () => {
            console.log('start computing total duration')
            const totalDuration = moviePlaylist
            // .filter(movie => movie.duration != null)
            .map(movie => movie.duration ?? 0)
            .reduce((d1, d2) => d1 + d2, 0)
            const totalHours = Math.floor(totalDuration / 60)
            const totalMinutes = totalDuration % 60
            console.log('end computing total duration', totalDuration, totalHours, totalMinutes)
            return [totalHours, totalMinutes]
        },
        [moviePlaylist]
    )
    return (
        <>
            <div className="playlist">
                <h2>Playlist</h2>
                <div className="total-duration">
                Total duration: {totalHours}h{totalMinutes.toString().padStart(2, '0')}
                </div>
                <label className={styles.detailEnable}>
                    Detail
                    <span className={styles.switch}>
                        <input
                            type="checkbox"
                            onChange={() => setDisplayCard(!displayCard)}
                            checked={displayCard}
                        />
                        <span className={styles.slider}></span>
                    </span>
                </label>
                <button onClick={() => dispatch({type: "resetPlaylist"})}>Reset</button>
                <div className={styles.grid}>
                    {
                        moviePlaylist.map((movie, index) => 
                            displayCard 
                            ? <GlobalMovieCard  key={movie.id} index={index} movie={movie} controlsEnable={[false, true]}/>
                            : <p key={movie.id} className={styles.simpleItem}>{movie.title} ({movie.year})</p>
                        )
                    }
                </div>
            </div>
            
        </>
    )
}

export default GlobalMoviePlaylist