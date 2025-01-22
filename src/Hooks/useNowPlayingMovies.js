import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/Movieslice";

const useNowPlayingMovies =()=>
{
const dispatch = useDispatch();
const fetchNowPlayingMovies = async ()=>
{
    
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options)

    const json = await data.json();
    console.log(json);
    dispatch(addNowPlaying(json.results));
}

useEffect(()=>
{
    fetchNowPlayingMovies();
},[]);
};

export default useNowPlayingMovies;