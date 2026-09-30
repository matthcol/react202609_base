import movies from '../../../data/movies.json'
import type { Movie } from '../../types/movie'
import styles from './GlobalMovieManager.module.css'
import GlobalMovieCard from './GlobalMovieCard'
import { useEffect, useState } from 'react'
import GlobalMoviePlaylist from './GlobalMoviePlaylist'
import { getMoviePage } from '../../services/movieApiService'
import Pagination from './Pagination'

const GlobalMovieManager = () => {
    const [movieSelection, setMovieSelection] = useState<Movie[]>([])
    const [yearMinStr, setYearMinStr] = useState("1850")
    const [yearMin, setYearMin] = useState(1850)
    const [numPage, setNumPage] = useState(1)
    const [pageSize, setPageSize] = useState(50)
    const [pageCount, setPageCount] = useState(1)

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
            console.log("effect: call API")
            getMoviePage(numPage, pageSize).subscribe(
                moviePageResponse => {
                    console.log(`effect: page received (num page=${
                            numPage
                        }, page count=${
                            moviePageResponse.pages
                        }, movie count=${
                            moviePageResponse.data.length
                        })`
                    )
                    setMovieSelection(moviePageResponse.data)
                    setPageCount(moviePageResponse.pages)
                }
            )
        },
        // []  // si aucune liste => useEffect appelé à chaque rendu
        [numPage, pageSize]
    )
    return (
        <>
            <section id="movies">
                <GlobalMoviePlaylist />
                <h2>Movies</h2>
                <div>
                    <Pagination 
                        numPage={numPage} 
                        setNumPage={setNumPage}
                        pageSize={pageSize} 
                        setPageSize={setPageSize} 
                        pageCount={pageCount} 
                    />
                    <div className={styles.filters}>
                    <label htmlFor="year-min">Année min</label>
                    <input
                        id="year-min"
                        type="number"
                        value={yearMinStr}
                        onChange={handleChangeYearMin} />
                    </div>
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