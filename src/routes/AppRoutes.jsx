import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Series from "../pages/Series";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie" element={<Movie/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/search" element={<Search/>}/>

            <Route path="/*" element={<NotFound/>}/>
            
        </Routes>
    )
}

export default AppRoutes