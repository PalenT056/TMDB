import { useState } from "react"

export default function SeriesBtn ({ setSeriesType }) {
    const [active, setActive] = useState("airing_today")

    const handleAiring = () => {
        setActive("airing_today")
        setSeriesType("airing_today")
    }

    const handleOnAir = () => {
        setActive("on_the_air")
        setSeriesType("on_the_air")
    }

    const handlePopular = () => {
        setActive("popular")
        setSeriesType("popular")
    }

    const handleTop = () => {
        setActive("top_rated")
        setSeriesType("top_rated")
    }

    return (
        <div className="flex gap-2 items-center mt-10">
            <p className="font-bold text-2xl">Series</p>
            <div className="flex bg-gray-200 rounded-2xl">
                <button 
                onClick={handleAiring}
                className={`px-4 rounded-4xl transition-all ${active === "airing_today" ? "bg-black text-white" : "text-black"}`}
                >
                Airing Today
                </button>

                <button 
                onClick={handleOnAir}
                className={`px-4 rounded-4xl transition-all ${active === "on_the_air" ? "bg-black text-white" : "text-black"}`}
                >
                On The Air
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
            </div>
        </div>
    )
}