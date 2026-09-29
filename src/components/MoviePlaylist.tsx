import { useMemo, useState } from "react"
import type { Movie } from "../types/movie"
import MovieCard from "./MovieCard"
import styles from "./MoviePlaylist.module.css"

type MoviePlaylistProps = {
    moviePlaylist: Movie[]
}

const MoviePlaylist = ({moviePlaylist}: MoviePlaylistProps) => {
    const [displayCard, setDisplayCard] = useState(true)
    
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
                <input 
                    type="checkbox" 
                    onChange={() => setDisplayCard(!displayCard)}
                    checked={displayCard}
                ></input>
                <div className={styles.grid}>
                    {
                        moviePlaylist.map((movie, index) => 
                            displayCard 
                            ? <MovieCard  key={movie.id} index={index} movie={movie} />
                            : <p>{movie.title} ({movie.year})</p>
                        )
                    }
                </div>
                <div className="total-duration">
                Total duration: {totalHours}h{totalMinutes.toString().padStart(2, '0')}
                </div>
            </div>
            
        </>
    )
}

export default MoviePlaylist