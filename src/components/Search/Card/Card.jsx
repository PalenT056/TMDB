export default function Card ({ data }) {
    
    return (
        <div className="flex flex-col gap-4 w-full">
            {data.map((p, i) => (
                <div key={i} className="flex h-[150px] w-auto bg-white shadow-md rounded-md border border-gray-200">
                    <div className="w-[120px]">
                        <img className="h-[150px] rounded-md" src={`https://image.tmdb.org/t/p/original/` + p.poster_path}/>
                    </div>
                    <div className="mx-2 w-full overflow-x-auto">
                        <p className="font-bold">{p.title}</p>
                        <p className="text-gray-400 text-sm">{p.release_date}</p>
                        <p className="text-gray-500 mt-2">{p.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}