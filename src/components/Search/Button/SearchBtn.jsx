import { useState } from "react"

export default function SearchBtn ({ setType }) {
    const [active, setActive] = useState("movie")

    const movieActive = () => {
        setActive("movie")
        setType("movie")
    }

    const tvActive = () => {
        setActive("tv")
        setType("tv")
    }

    return (
        <div className="flex gap-2 w-full items-center">
            <div className="flex bg-gray-200 rounded-2xl">
                <button 
                onClick={movieActive}
                className={`px-4 rounded-4xl transition-all ${active === "movie" ? "bg-black text-white" : "text-black"}`}
                >
                Movie
                </button>

                <button 
                onClick={tvActive}
                className={`px-4 rounded-4xl transition-all ${active === "tv" ? "bg-black text-white" : "text-black"}`}
                >
                Series
                </button>
            </div>
        </div>

    )
}