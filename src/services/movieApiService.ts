import {catchError, from, map, of, switchMap} from 'rxjs'
import type { Movie } from '../types/movie'

const BASE_URL = 'http://localhost:3000/movies'

type PageMovieResponse = {
    first: number
    prev: number | null
    next: number | null
    last: number
    pages: number
    items: number
    data: Movie[]
}

const defaultMoviePageResponse: PageMovieResponse = {
    first: 1,
    prev: null,
    next: null,
    last: 1,
    pages: 1,
    items: 0,
    data: []
}

const getMoviePage = (numPage: number, pageSize: number) => {
    // http://localhost:3000/movies?_page=1&_per_page=10
    return from(
        fetch(`${BASE_URL}?_page=${numPage}&_per_page=${pageSize}`)
    ).pipe(
        // handle HTTP response
        switchMap(
            (response) => {
                if (!response.ok) throw new Error(`Wrong HTTP status: ${response.status}`)
                // 200 OK
                const jsonResponse = response.json()
                return from<Promise<PageMovieResponse>>(jsonResponse)
            }
        ),
        // map(...), // adapter la reponse
        catchError(
            (error) => {
                console.log('[Error] call api: ', error)
                // TODO: erreur finale
                return of(defaultMoviePageResponse)
            }
        )
    )
}

// other calls API

export {getMoviePage}