import type { Movie } from "../types/movie"
import MovieCard from "./MovieCard"
import styles from "./MoviePlaylist.module.css"

type MoviePlaylistProps = {
    moviePlaylist: Movie[]
}

const MoviePlaylist = ({moviePlaylist}: MoviePlaylistProps) => {
    return (
        <>
            <div className="playlist">
                <h2>Playlist</h2>
                <div className={styles.grid}>
                    {
                        moviePlaylist.map((movie, index) => 
                            <MovieCard index={index} movie={movie} />
                        )
                    }
                </div>
                <div className="total-duration">
                    {
                        // TODO : durée totale
                    }
                    Total : 0 mn
                </div>
            </div>
            
        </>
    )
}

export default MoviePlaylist