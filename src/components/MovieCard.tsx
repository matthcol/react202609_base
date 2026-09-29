import type { Movie } from "../types/movie"
import styles from "./MovieCard.module.css"

type MovieCardProps = {
    index: number
    movie: Movie
    addPlaylist: (movie: Movie) => void
}

// composant MovieCard reçoit un movie dans ses props
const MovieCard = ({index, movie}: MovieCardProps) => {
    const display = true
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
            // TODO : [optionnel] ajouter playlist widget + handleClick
            }
            {display && <div>Zone à cacher</div>}
        </div>
    )
}

export default MovieCard