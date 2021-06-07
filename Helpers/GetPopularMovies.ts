import axios from "axios"
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=1e76ac025d396641d561ff763cc5fb57&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
export const GetPopularData= async ()=>{
    try {
        const response = await axios.get(url) ;
        return response.data.results ;
    } catch (error) {
        return error
    }
}     

export const SearchMovie = async(query : string) =>{
    const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=1e76ac025d396641d561ff763cc5fb57&language=en&query=${query}&page=1`
    try {
        const response = await axios.get(SearchUrl) ;
        return response.data.results ;
    } catch (error) {
        return error
    }
}

export const Trending = async () =>{
    const SearchUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=1e76ac025d396641d561ff763cc5fb57`
    try {
        const response = await axios.get(SearchUrl) ;
        return response.data.results ;
    } catch (error) {
        return error
    }
}