import movies from '../../../data/movies.json'
import type { Movie } from '../../types/movie'
import styles from './GlobalMovieManager.module.css'
import GlobalMovieCard from './GlobalMovieCard'
import { useEffect, useState } from 'react'
import GlobalMoviePlaylist from './GlobalMoviePlaylist'
import { getMoviePage } from '../../services/movieApiService'

const GlobalMovieManager = () => {
    const [movieSelection, setMovieSelection] = useState<Movie[]>([])
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

    // useEffect est fait à la fin:
    // - 1er rendu
    // - à chaque changement de dépendance
    useEffect(
        () => {
            getMoviePage(1, 20).subscribe(
                moviePageResponse => setMovieSelection(moviePageResponse.data)
            )
            //, [numPage, pageSize]
        }
    )
    return (
        <>
            <section id="movies">
                <GlobalMoviePlaylist />
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