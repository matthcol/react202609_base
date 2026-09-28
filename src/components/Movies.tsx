
import { useState } from 'react'
import movies from '../../data/movies.json'
import MovieCard from './MovieCard'
import type { Movie } from '../types/Movie'

const Movies = () => {
    const [movieSelection, setMovieSelection] = useState<Movie[]>(
        () => movies.slice()
    )
    return (
        <>
            <section id="movies">
                <h2>Movies</h2>
                <MovieCard index={0} movie={movieSelection[0]} />
            </section>
        </>
    )
}

export default Movies