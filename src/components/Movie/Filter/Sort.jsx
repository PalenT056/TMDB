import { useState } from "react"
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function SortMovie ({ setSort }) {
    const [open, setOpen] = useState(false)

    const handlePopularityAsc = () => {
        setSort("popularity.asc")
        setOpen(!open)
    }

    const handlePopularityDesc = () => {
        setSort("popularity.desc")
        setOpen(!open)
    }

    const handleReleaseAsc = () => {
        setSort("primary_release_date.asc")
        setOpen(!open)
    }

    const handleReleaseDesc = () => {
        setSort("primary_release_date.desc")
        setOpen(!open)
    }
    

    return (
        <div className="flex">
            <div className="relative w-full border border-gray-200 shadow-sm rounded-md h-10 flex items-center justify-center">
                <button className="font-bold w-full h-full" onClick={() => setOpen(!open)}>Sort</button>

                {open && (
                    <div className="absolute top-full z-10 mt-1 w-full">
                        <ul className="w-full h-auto bg-gray-50 flex flex-col items-center justify-center Popularity">
                            <li onClick={handlePopularityAsc} className="flex items-center justify-center w-full h-10 hover:bg-gray-200 cursor-pointer">Popularity <IoMdArrowDropup /></li>
                            <li onClick={handlePopularityDesc} className="flex items-center justify-center w-full h-10 hover:bg-gray-200 cursor-pointer">Popularity <IoMdArrowDropdown /></li>
                            <li onClick={handleReleaseAsc} className="flex items-center justify-center w-full h-10 hover:bg-gray-200 cursor-pointer">Release Date <IoMdArrowDropup /></li>
                            <li onClick={handleReleaseDesc} className="flex items-center justify-center w-full h-10 hover:bg-gray-200 cursor-pointer">Release Date <IoMdArrowDropdown /></li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}