export default function Content ({ content }) {
    return (
        <div className="w-full h-20 mt-10 mb-10 flex justify-center items-center shadow-md bg-white">
            <p className="text-2xl font-bold">{content}</p>
        </div>
    )
}