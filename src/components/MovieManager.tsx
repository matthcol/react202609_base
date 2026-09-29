
import { useState } from 'react'
import movies from '../../data/movies.json'
import type { Movie } from '../types/movie'
import styles from './MovieManager.module.css'
import MovieCard from './MovieCard'
import MoviePlaylist from './MoviePlaylist'

const MovieManager = () => {
    const [movieSelection, setMovieSelection] = useState<Movie[]>(
        () => movies.slice()
    )
    const [yearMinStr, setYearMinStr] = useState("1850")
    const [yearMin, setYearMin] = useState(1850)
    const [moviePlaylist, setMoviePlaylist] = useState<Movie[]>([])

    const addPlaylist = (movie: Movie) => {
        console.log("add movie:", movie)
        // moviePlaylist.push(movie) // KO : same ref => no render
        setMoviePlaylist((prevPlayList) => 
            (prevPlayList.indexOf(movie) == -1) 
            ? [...prevPlayList, movie]
            : prevPlayList
        )
    }

    const handleChangeYearMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValueStr: string = e.target.value
        setYearMinStr(newValueStr)
        if (newValueStr.length >= 4) {
            const newValueInt = Number.parseInt(e.target.value)
            setYearMin(newValueInt)
        }
    }

    // TODO : prevoir une selection der plage d'années et n'afficher que la selection filtree
    return (
        <>
            <section id="movies">
                <MoviePlaylist moviePlaylist={moviePlaylist} />
                <h2>Movies</h2>
                <div className={styles.filters}>
                    <label htmlFor="year-min">Année min</label>
                    <input
                        id="year-min"
                        type="number"
                        value={yearMinStr}
                        onChange={handleChangeYearMin} />
                </div>
                <div className={styles.grid}>
                {   // version 1 : 1 seule card
                    /* <MovieCard index={0} movie={movieSelection[0]} /> */
                }
                {
                    // version 2 : 1 element HTML <p> par movie
                    // movieSelection.map(movie => <p>{movie.title}</p>)
                }
                {
                    // version 3 : 1 card par movie
                    movieSelection
                        .filter(movie => movie.year >= yearMin)
                        .map((movie, index) => 
                            <MovieCard 
                                key={movie.id} 
                                index={index} 
                                movie={movie} 
                                addPlaylist={addPlaylist}
                            />
                        )
                }
                </div>
            </section>
        </>
    )
}

export default MovieManager