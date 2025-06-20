import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar ({ setQuery }) {
    const [value, setValue] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        setQuery(value)
    }

    return (
        <div className="w-full h-[50px] border border-gray-200 shadow-md rounded-md">
            <form onSubmit={handleSearch} className="w-full h-full flex">
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    className="w-[95%] h-full px-4 outline-none text-xl"></input>
                <button className="w-[5%] h-full bg-gray-200 flex items-center justify-center text-3xl cursor-pointer hover:bg-gray-300 duration-50"><IoSearchSharp /></button>
            </form>
        </div>
    )
}