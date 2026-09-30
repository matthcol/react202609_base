import type { ActionDispatch, ChangeEvent, Dispatch, SetStateAction } from "react"

// TODO: utiliser un reducer pour gerer la data de la pagination 
//    et les modifications (currentPage, pageCount, pageSize)
type PaginationProps = {
    numPage: number
    setNumPage: Dispatch<SetStateAction<number>>
    pageSize: number
    setPageSize: Dispatch<SetStateAction<number>>
    pageCount: number
}

const Pagination = ({numPage, setNumPage, pageSize, setPageSize, pageCount}: PaginationProps) => {
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1)
    return (
        <>
        {
            pages.map(page => (
                <button 
                    key={page} 
                    disabled={page == numPage}
                    onClick={() => setNumPage(page)}
                >{page}</button>
            ))
        }
        <select 
            value={pageSize} 
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPageSize(Number.parseInt(e.target.value))}
        >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        </>
    )
}

export default Pagination