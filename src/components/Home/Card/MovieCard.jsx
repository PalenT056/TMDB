export default function MovieCard ({ data }) {
    
    return (
        <div className="relative w-full flex overflow-x-auto gap-4 mt-2 pb-2 pt-2">
            {data.map((p, i) => (
                <div key={i} className="flex flex-col justify-between flex-shrink-0 w-40 h-85 transition duration-300 hover:translate-y-[-4px]">
                    <div>
                        <img className="w-40 h-60 rounded-xl" src={`https://image.tmdb.org/t/p/original/` + p.poster_path}/>
                        <p className="font-bold">{p.title}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">{p.release_date}{p.first_air_date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}