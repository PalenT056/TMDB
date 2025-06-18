import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar () {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex w-full h-[80px] shadow-md items-center justify-center bg-white">
            <ul className="flex gap-6">
                <Link to="/">
                    <li className="font-bold text-2xl cursor-pointer">Home</li>
                </Link>

                <li className="font-bold text-2xl cursor-pointer relative">
                    <button className="cursor-pointer" onClick={() => setOpen(!open)}>Discover</button>

                    {open && (
                        <div className="absolute top-full left-0 z-10 mt-2 w-[150px] bg-white shadow-md">
                            <ul className="text-gray-600 text-sm">
                                <Link to="/movie">
                                    <li className="h-8 px-2 flex items-center hover:bg-gray-100 cursor-pointer">Movie</li>
                                </Link>
                                <Link to="/series">
                                    <li className="h-8 px-2 flex items-center hover:bg-gray-100 cursor-pointer">Series</li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </li>

                <Link to="/search">
                    <li className="font-bold text-2xl cursor-pointer">Search</li>
                </Link>
            </ul>
        </div>
    )
}