import { useContext } from "react"
import { MoviePlaylistContext } from "../contexts/MoviePlaylistContext"


const useMoviePlaylist = () => {
    const moviePlayListValueOrNull = useContext(MoviePlaylistContext)
    if (moviePlayListValueOrNull == null) throw new Error("Uilisation hors contexte de la playlist")  // handle ErrorBoundary
    const {moviePlaylist, dispatch} =  moviePlayListValueOrNull!   
    console.log("custom hook useMoviePlaylist: context value retrieved with succes")
    return {moviePlaylist, dispatch}
}

export default useMoviePlaylist