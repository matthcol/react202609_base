import type { Movie } from "../../types/movie"
import styles from "./GlobalMovieCard.module.css"
import GlobalMovieControls from "./GlobalMovieControls"
import posterDefaultUrl from "../../assets/poster-default.svg"

type GlobalMovieCardProps = {
    index: number
    movie: Movie
    controlsEnable: [boolean, boolean]
}

const GlobalMovieCard = ({index, movie, controlsEnable}: GlobalMovieCardProps) => {
    return (
        <div className={styles.card}>
            <img 
                className={styles.poster} 
                src={movie.posterUrl ? movie.posterUrl : posterDefaultUrl} 
                alt={movie.title} 
            />
            <div className={styles.info}>
                <p className={styles.title}>{index + 1} - {movie.title}</p>
                <div className={styles.meta}>
                    <span className={styles.year}>{movie.year}</span>
                    <span>{movie.duration ?? 'NA'} mn</span>
                </div>
            </div>
            <GlobalMovieControls movie={movie} controlsEnable={controlsEnable} />
        </div>
    )
}

export default GlobalMovieCard