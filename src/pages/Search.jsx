import { useState, useEffect } from "react"
import { fetchSearch } from "../services/SearchAPI"
import Navbar from "../components/Navbar/Nav"
import SearchBar from "../components/Search/Filter/Search"
import SearchBtn from "../components/Search/Button/SearchBtn"
import Card from "../components/Search/Card/Card"

export default function Search () {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [type, setType] = useState("movie")

    useEffect(() => {

        if (!query) {
            setQuery("avengers")
        }

        const fetchData = async () => {
            try {
                const data = await fetchSearch(query, type)
                setData(data.results)
            } catch (err) {
                console.log(err)
            }   
        }
        fetchData()
    }, [query, type])
    
    return (
        <div className="flex flex-col h-auto items-center">
            <Navbar/>
            <div className="w-[1100px] mt-10 h-auto flex p-4 gap-6 flex flex-col items-center">
                <SearchBar setQuery={setQuery}/>
                <SearchBtn setType={setType}/>
                <Card data={data} type={type}/>
            </div>
        </div>
    )
}