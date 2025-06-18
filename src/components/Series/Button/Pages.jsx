import { useState } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PagesSeries ({ setPages }) {
    const [page, setPage] = useState(1)

    const handlePageUp = () => {
        setPage(page+1)
        setPages(page+1)
    }

    const handlePageDown = () => {
        if (page > 1) {
            setPage(page-1)
            setPages(page-1)
        }
    }
    
    return (
        <div className="w-full h-10 flex items-center justify-center gap-4">
            <button onClick={handlePageDown} className="text-2xl cursor-pointer"><MdKeyboardArrowLeft /></button>
            <p className="text-gray-500">{page}</p>
            <button onClick={handlePageUp} className="text-2xl cursor-pointer"><MdKeyboardArrowRight /></button>
        </div>
    )
} 