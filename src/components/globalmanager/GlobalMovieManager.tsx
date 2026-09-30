import movies from '../../../data/movies.json'
import type { Movie } from '../../types/movie'
import styles from './GlobalMovieManager.module.css'
import GlobalMovieCard from './GlobalMovieCard'
import { useState } from 'react'

const GlobalMovieManager = () => {
    const [movieSelection, setMovieSelection] = useState<Movie[]>(
        () => movies.slice()
    )
    const [yearMinStr, setYearMinStr] = useState("1850")
    const [yearMin, setYearMin] = useState(1850)

    const handleChangeYearMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValueStr: string = e.target.value
        setYearMinStr(newValueStr)
        if (newValueStr.length >= 4) {
            const newValueInt = Number.parseInt(e.target.value)
            setYearMin(newValueInt)
        }
    }

    
    return (
        <>
            <section id="movies">
                {/* <MoviePlaylist moviePlaylist={moviePlaylist} /> */}
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
                {
                    movieSelection
                        .filter(movie => movie.year >= yearMin)
                        .map((movie, index) => 
                            <GlobalMovieCard
                                key={movie.id} 
                                index={index} 
                                movie={movie} 
                                controlsEnable={[true, true]}
                            />
                        )
                }
                </div>
            </section>
        </>
    )
}

export default GlobalMovieManager