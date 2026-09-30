import { useContext } from "react"
import { MoviePlaylistContext } from "../../contexts/MoviePlaylistContext"
import type { Movie } from "../../types/movie"

type GlobalMovieControlsProps = {
    movie: Movie
    controlsEnable: [boolean, boolean]
}

const GlobalMovieControls = ({movie, controlsEnable}: GlobalMovieControlsProps) => {
    const {dispatch} = useContext(MoviePlaylistContext)!
    const [enableAdd, enableRemove] = controlsEnable
    return (
        <>
            {
                enableAdd 
                && <button onClick={
                        () => dispatch({type: "addToPlaylist", movie: movie})
                    }>+</button>
            }
            {
                enableRemove
                && <button onClick={
                        () => dispatch({type: "removeFromPlaylist", movieId: movie.id})
                    }>-</button>
            }
        </>
    )
}

export default GlobalMovieControls