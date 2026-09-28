import type { Movie } from "../types/Movie"

type MovieCardProps = {
    index: number
    movie: Movie
}

// composant MovieCard reçoit un movie dans ses props
const MovieCard = ({index, movie}: MovieCardProps) => {
    return (
        <>
            <div className="movie-card">
                {index + 1} - {movie.title} ({movie.year}), {movie.duration??'NA'} mn
            </div>
        </>
    )
}

export default MovieCard