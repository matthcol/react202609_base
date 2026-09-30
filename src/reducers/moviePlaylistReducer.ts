import type { Movie } from "../types/movie";

type ActionMoviePlaylist = 
    | { type: 'addToPlaylist'; movie: Movie}
    | { type: 'removeFromPlaylist'; movieId: string}
    | { type: 'resetPlaylist'}

const moviePlaylistReducer = (moviePlaylist: Movie[], action: ActionMoviePlaylist) => {
    switch (action.type) {
        case "addToPlaylist": {
            if (moviePlaylist.indexOf(action.movie) >= 0) return moviePlaylist
            const newPlaylist = [...moviePlaylist, action.movie]
            return newPlaylist
        }
        case "removeFromPlaylist": {
            console.log("Remove from playlist movie with id: ", action.movieId)
            const listIdMovieMatching = moviePlaylist
                    .map((movie, index) => ({movie, index}))
                    .filter(({movie}) => movie.id == action.movieId)
                    .map(({index}) => index)
            if (listIdMovieMatching.length == 0) return moviePlaylist
            const firstIndexToRemove = listIdMovieMatching[0] // NB: movies have been added only once
            return moviePlaylist.toSpliced(firstIndexToRemove, 1)
        }
        case "resetPlaylist": {
            return []
        }
    }
}

export {moviePlaylistReducer, type ActionMoviePlaylist}