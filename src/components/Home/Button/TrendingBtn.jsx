import { useState } from "react"

export default function TrenBtn ({ setTrendingTime }) {
    const [active, setActive] = useState("dayBtn")

    const dayActive = () => {
        setActive("dayBtn")
        setTrendingTime("day")
    }

    const weekActive = () => {
        setActive("weekBtn")
        setTrendingTime("week")
    }

    return (
        <div className="flex gap-2 items-center">
            <p className="font-bold text-2xl">Trending</p>
            <div className="flex bg-gray-200 rounded-2xl">
                <button 
                onClick={dayActive}
                className={`px-4 rounded-4xl transition-all ${active === "dayBtn" ? "bg-black text-white" : "text-black"}`}
                >
                Day
                </button>

                <button 
                onClick={weekActive}
                className={`px-4 rounded-4xl transition-all ${active === "weekBtn" ? "bg-black text-white" : "text-black"}`}
                >
                Week
                </button>
            </div>
        </div>

    )
}