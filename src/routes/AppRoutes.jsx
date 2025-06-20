import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Series from "../pages/Series";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import DetailMovie from "../pages/DetailMovie";
import DetailSeries from "../pages/DetailSeries";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie" element={<Movie/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/detail/:media_type/:id" element={<Detail/>}/>
            <Route path="/movie/:id" element={<DetailMovie/>}/>
            <Route path="/series/:id" element={<DetailSeries/>}/>

            <Route path="/*" element={<NotFound/>}/>
            
        </Routes>
    )
}

export default AppRoutes