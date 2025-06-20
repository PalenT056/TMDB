import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export default function DetailSearch () {
    const { id, type } = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}`, {
            params: {
                api_key: apiKey
            }
        })
        .then(res => setDetail(res.data))
    }, [id])

    if (!detail) return <p>Loading...</p>

    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="flex inset-shadow-sm shadow-md w-full h-[480px] items-center justify-center">

                <div className="h-full w-[320px] flex items-center">
                    <img className="h-[480px] w-[320px] p-4" src={`https://image.tmdb.org/t/p/original/` + detail.poster_path}/>
                </div>

                <div className="w-[1000px] h-full px-2 py-6">
                    <p className="text-4xl font-bold">{detail.title || detail.name}</p>

                    <p className="text-gray-800">{detail.release_date || detail.first_air_date}</p>
                    <div className="flex gap-1">
                        {(detail.genres).map((p, i) => (
                            <div key={i}>
                                <p className="text-gray-500">{p.name}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500">Popularity : {detail.popularity}</p>

                    <p className="mt-20 text-gray-400 text-xl"><i>{detail.tagline}</i></p>
                    <p className="text-2xl font-bold">Overview</p>
                    <div className="h-[150px] w-full overflow-x-auto">
                        <p className="text-gray-600 text-lg">{detail.overview}</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}