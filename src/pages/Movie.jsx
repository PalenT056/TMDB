import React from "react";
import { useState, useEffect } from "react"
import { MovieAPI } from "../services/MovieAPI"
import Navbar from "../components/Navbar/Nav"
import SortMovie from "../components/Movie/Filter/Sort";
import Card from "../components/Movie/Card/Card"
import PagesMovie from "../components/Movie/Button/Pages";

export default function Movie () {
    const [movie, setMovie] = useState([])
    const [sort, setSort] = useState("popularity.desc")
    const [pages, setPages] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await MovieAPI(sort, pages)
                setMovie(data.results)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [sort, pages])

    return (
        <div className="flex flex-col h-auto items-center">
            <Navbar/>
            <div className="w-[1400px] mt-10 h-auto flex p-4 gap-6">

                <div className="flex flex-col gap-4 h-[500px] w-[300px] rounded-xl p-2">
                    <SortMovie setSort={setSort}/>
                    <PagesMovie setPages={setPages}/>
                </div>

                <div className="h-auto w-[1100px]">
                    <Card data={movie}/>
                </div>

            </div>
        </div>
    )
}