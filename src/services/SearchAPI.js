import axios from "axios"
const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const fetchSearch = async (query, type) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/${type}`, {
            params: {
                api_key: apiKey,
                query: query
            }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}