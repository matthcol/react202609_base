
import { useState } from 'react'
import movies from '../../data/movies.json'
import MovieCard from './MovieCard'
import type { Movie } from '../types/Movie'

const Movies = () => {
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

    // TODO : prevoir une selection der plage d'années et n'afficher que la selection filtree
    return (
        <>
            <section id="movies">
                <h2>Movies</h2>
                <div>
                    <input 
                        type="number" 
                        value={yearMinStr} 
                        onChange={handleChangeYearMin} />
                </div>
                <div>
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
                        .map((movie, index) => <MovieCard index={index} movie={movie} />)
                }
                </div>
            </section>
        </>
    )
}

export default Movies