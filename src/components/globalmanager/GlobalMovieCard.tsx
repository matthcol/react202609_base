import { useContext } from "react"
import type { Movie } from "../../types/movie"
import styles from "./GlobalMovieCard.module.css"
import { MoviePlaylistContext } from "../../contexts/MoviePlaylistContext"

type GlobalMovieCardProps = {
    index: number
    movie: Movie
    controlsEnable: [boolean, boolean]
}

// composant MovieCard reçoit un movie dans ses props
const GlobalMovieCard = ({index, movie, controlsEnable}: GlobalMovieCardProps) => {
    const {dispatch} = useContext(MoviePlaylistContext)!
    const [enableAdd, enableRemove] = controlsEnable
    return (
        <div className={styles.card}>
            <img className={styles.poster} src={movie.posterUrl} alt={movie.title} />
            <div className={styles.info}>
                <p className={styles.title}>{index + 1} - {movie.title}</p>
                <div className={styles.meta}>
                    <span className={styles.year}>{movie.year}</span>
                    <span>{movie.duration ?? 'NA'} mn</span>
                </div>
            </div>
            {
                enableAdd 
                && <button onClick={
                        () => dispatch({type: "addToPlaylist", movie: movie})
                    }>+</button>}
        </div>
    )
}

export default GlobalMovieCard