import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const MovieAPI = async (sort, pages) => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: apiKey,
                sort_by: sort,
                page: pages
            }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}