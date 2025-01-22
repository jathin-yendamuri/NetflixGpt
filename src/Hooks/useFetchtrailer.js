import { useEffect } from "react";
import { addMainTrailer } from "../utils/Movieslice";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";

const useFetchtrailer = (movieId)=>
{
    const dispatch = useDispatch();


    const fetchtrailer = async ()=>
        {
            const URL = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
            const data = await fetch(URL,options);
            const json = await data.json();
            const filterdata = json.results.filter((record)=> record.type==="Trailer" )
            const mainMovieVideo = filterdata.length ? filterdata[0] : json.results[0];
            dispatch(addMainTrailer(mainMovieVideo));
        }
    
        useEffect( ()=>
        {
            fetchtrailer();
        },[]);

}

export default useFetchtrailer; 