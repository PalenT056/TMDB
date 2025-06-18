import { useState } from "react"

export default function MovieBtn ({ setMovieType }) {
    const [active, setActive] = useState("now_playing")

    const handlePlaying = () => {
        setActive("now_playing")
        setMovieType("now_playing")
    }

    const handlePopular = () => {
        setActive("popular")
        setMovieType("popular")
    }

    const handleTop = () => {
        setActive("top_rated")
        setMovieType("top_rated")
    }

    const handleUp = () => {
        setActive("upcoming")
        setMovieType("upcoming")
    }

    return (
        <div className="flex gap-2 items-center mt-10">
            <p className="font-bold text-2xl">Movie</p>
            <div className="flex bg-gray-200 rounded-2xl">
                <button 
                onClick={handlePlaying}
                className={`px-4 rounded-4xl transition-all ${active === "now_playing" ? "bg-black text-white" : "text-black"}`}
                >
                Now Playing
                </button>

                <button 
                onClick={handlePopular}
                className={`px-4 rounded-4xl transition-all ${active === "popular" ? "bg-black text-white" : "text-black"}`}
                >
                Popular
                </button>

                <button 
                onClick={handleTop}
                className={`px-4 rounded-4xl transition-all ${active === "top_rated" ? "bg-black text-white" : "text-black"}`}
                >
                Top Rated
                </button>

                <button 
                onClick={handleUp}
                className={`px-4 rounded-4xl transition-all ${active === "upcoming" ? "bg-black text-white" : "text-black"}`}
                >
                Upcoming
                </button>
            </div>
        </div>
    )
}