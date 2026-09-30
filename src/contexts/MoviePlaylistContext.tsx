import { createContext, useReducer, type ActionDispatch, type ReactNode } from "react";
import type { Movie } from "../types/movie";
import { moviePlaylistReducer, type ActionMoviePlaylist } from "../reducers/moviePlaylistReducer";

type MoviePlaylistValue = {
    moviePlaylist: Movie[]
    dispatch: ActionDispatch<[action: ActionMoviePlaylist]>
}

type MoviePlaylistContextProviderProps = {
    children: ReactNode
}

// definition globale du contexte et element de récupération de valeur
const MoviePlaylistContext = createContext<MoviePlaylistValue|null>(null)

// mise en place de la valeur du contexte dans l'arborescence des composants
const MoviePlaylistContextProvider = ({children}: MoviePlaylistContextProviderProps) => {
    const [moviePlaylist, dispatch] = useReducer(moviePlaylistReducer, [])

    // Note: {moviePlaylist, dispatch} i.e {moviePlaylist: moviePlaylist, dispatch: dispatch}
    return (
        <MoviePlaylistContext.Provider value={{moviePlaylist, dispatch}}>
            {children}
        </MoviePlaylistContext.Provider>
    )
}

export {MoviePlaylistContext, MoviePlaylistContextProvider, type MoviePlaylistValue}