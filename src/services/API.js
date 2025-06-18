import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const FetchTrending = async (trendingTime = "day") => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/${trendingTime}`, {
            params: { api_key: apiKey }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}

// Movie & Series //

export const FetchMovie = async (setMovieType = "now_playing") => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${setMovieType}`, {
            params: { api_key: apiKey }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}

//

export const FetchSeries = async (seriesType = "airing_today") => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/${seriesType}`, {
            params: { api_key: apiKey }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}