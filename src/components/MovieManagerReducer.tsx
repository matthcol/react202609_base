import { useContext, useReducer } from "react"
import { moviePlayListReducer, type ActionMoviePlaylist } from "../reducers/moviePlaylistReducer"
import type { Movie } from "../types/movie"
import { ContextCounter } from "../main"

const MovieManagerReducer = () => {
    // const [moviePlaylist, dispatch] = useReducer<Movie[], [action: ActionMoviePlaylist]>(moviePlayListReducer, [])
    const [moviePlaylist, dispatch] = useReducer(moviePlayListReducer, [])
    const counter = useContext(ContextCounter)
    return (
        <>
            <p>Contexte : {counter}</p>
            <p>{JSON.stringify(moviePlaylist)}</p>
            <p>Regarder la console et la vue Component de React Dev Tools pour voir la playlist évoluer</p>
            <div>
                <button onClick={() => dispatch({type: "addToPlaylist", movie: {id: "000", title: "New Movie", year: 1900}})}>+</button>
                <button onClick={() => dispatch({type: "removeFromPlaylist", movieId: "000"})}>-</button>
                <button onClick={() => dispatch({type: "resetPlaylist"})}>Reset</button>
            </div>
        </>
    )
}

export default MovieManagerReducer