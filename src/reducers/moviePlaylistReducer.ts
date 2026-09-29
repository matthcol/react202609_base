import type { Movie } from "../types/movie";

type ActionMoviePlaylist = 
    | { type: 'addToPlaylist'; movie: Movie}
    | { type: 'removeFromPlaylist'; movieId: string}
    | { type: 'resetPlaylist'}

const moviePlayListReducer = (moviePlaylist: Movie[], action: ActionMoviePlaylist) => {
    switch (action.type) {
        case "addToPlaylist": {
            if (moviePlaylist.indexOf(action.movie) >= 0) return moviePlaylist
            const newPlaylist = [...moviePlaylist, action.movie]
            return newPlaylist
        }
        case "removeFromPlaylist": {
            // TODO
            return moviePlaylist
        }
        case "resetPlaylist": {
            return []
        }
    }
}

export {moviePlayListReducer, type ActionMoviePlaylist}