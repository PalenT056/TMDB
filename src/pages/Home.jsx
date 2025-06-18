import React from "react";
import { useState, useEffect } from "react"
import { FetchTrending, FetchMovie, FetchSeries } from "../services/API"
import { useInView } from "react-intersection-observer"

import Navbar from "../components/Navbar/Nav"

import MovieCard from "../components/Home/Card/MovieCard"
import TrendingCard from "../components/Home/Card/TrendingCard"
import SeriesCard from "../components/Home/Card/SeriesCard"

import MovieBtn from "../components/Home/Button/MovieBtn"
import TrenBtn from "../components/Home/Button/TrendingBtn"
import SeriesBtn from "../components/Home/Button/SeriesBtn"

import Content from "../components/Content/Content"

function LazyComponent ({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (inView) {
            setVisible(true)
        }
    }, [inView])

    return (
        <div 
            ref={ref} 
            style={{ minHeight: 'auto' }} 
            className={`transition-opacity transition-transform duration-700 ease-out ${visible ? 'opacity-100 translate-y-0'  : 'opacity-0 translate-y-10'}`}
        >
            {inView ? children : null}
        </div>
    )

}

export default function Home () {
    const [trending, setTrending] = useState([])
    const [movie, setMovie] = useState([])
    const [series, setSeries] = useState([])

    const [trendingTime, setTrendingTime] = useState("day")
    const [movieType, setMovieType] = useState("now_playing")
    const [seriesType, setSeriesType] = useState("airing_today")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [movieData, trendingData, seriesData] = await Promise.all([
                    FetchMovie(movieType),
                    FetchTrending(trendingTime),
                    FetchSeries(seriesType)
                ])
                setMovie(movieData.results)
                setTrending(trendingData.results)
                setSeries(seriesData.results)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [movieType, trendingTime, seriesType])

    return (
        <div className="w-full flex flex-col items-center">
            <Navbar/>
            <div className="w-[70%] mt-10 flex flex-col">

                <LazyComponent>
                    <TrenBtn setTrendingTime={setTrendingTime}/>
                    <TrendingCard data={trending}/>
                </LazyComponent>

                <LazyComponent>
                    <Content content="Movie & Series"/>
                </LazyComponent>

                <LazyComponent>
                    <MovieBtn setMovieType={setMovieType}/>
                    <MovieCard data={movie}/>
                </LazyComponent>

                <LazyComponent>
                    <SeriesBtn setSeriesType={setSeriesType}/>
                    <SeriesCard data={series}/>
                </LazyComponent>

                <LazyComponent>
                    <Content content="People"/>
                </LazyComponent>

            </div>
        </div>
    )
}