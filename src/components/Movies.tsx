
import { useState } from 'react'
import movies from '../../data/movies.json'
import MovieCard from './MovieCard'
import type { Movie } from '../types/Movie'

const Movies = () => {
    const [movieSelection, setMovieSelection] = useState<Movie[]>(
        () => movies.slice()
    )

    // TODO : prevoir une selection der plage d'années et n'afficher que la selection filtree
    return (
        <>
            <section id="movies">
                <h2>Movies</h2>
                {   // version 1 : 1 seule card
                    /* <MovieCard index={0} movie={movieSelection[0]} /> */
                }
                {
                    // version 2 : 1 element HTML <p> par movie
                    // movieSelection.map(movie => <p>{movie.title}</p>)
                }
                {
                    // version 3 : 1 card par movie
                    movieSelection.map((movie, index) => <MovieCard index={index} movie={movie} />)
                }
            </section>
        </>
    )
}

export default Movies