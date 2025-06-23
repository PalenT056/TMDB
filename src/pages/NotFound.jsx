import { Link } from "react-router-dom"

export default function NotFound () {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <p className="text-4xl font-bold">Not Found</p>
            <Link to={`/`}>
                <p className="text-blue-700 underline">Back</p>
            </Link>
        </div>
    )
}