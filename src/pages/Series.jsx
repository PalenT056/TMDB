import React from "react";
import { useState, useEffect } from "react"
import { SeriesAPI } from "../services/SeriesAPI";
import Navbar from "../components/Navbar/Nav"
import SortSeries from "../components/Series/Filter/Sort";
import Card from "../components/Series/Card/Card"
import PagesSeries from "../components/Series/Button/Pages";

export default function Series () {
    const [series, setSeries] = useState([])
    const [sort, setSort] = useState("popularity.desc")
    const [pages, setPages] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SeriesAPI(sort, pages)
                setSeries(data.results)
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
                    <SortSeries setSort={setSort}/>
                    <PagesSeries setPages={setPages}/>
                </div>

                <div className="h-auto w-[1100px]">
                    <Card data={series}/>
                </div>

            </div>
        </div>
    )
}