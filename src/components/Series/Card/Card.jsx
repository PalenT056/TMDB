import { Link } from "react-router-dom"
import { slugify } from "../../../utils/slugify"

export default function Card ({ data }) {
    return (
        <div className="flex flex-col gap-4">
            {data.map((p, i) => (
                <div key={i} className="flex h-[150px] w-auto bg-white shadow-md rounded-md border border-gray-200">
                    <div className="w-[120px]">
                        <img className="h-[150px] rounded-md" src={`https://image.tmdb.org/t/p/original/` + p.poster_path}/>
                    </div>
                    <div className="mx-2 w-full overflow-x-auto">
                        <Link to={`/series/${p.id}-${slugify(p.title || p.name)}`}>
                            <p className="font-bold">{p.name}</p>
                        </Link>
                        <p className="text-gray-400 text-sm">{p.first_air_date}</p>
                        <p className="text-gray-500 mt-2">{p.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}