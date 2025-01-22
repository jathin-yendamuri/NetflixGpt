import { useEffect } from "react";
import { options,POPULAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/Movieslice";

const usePopularMovies = ()=>
{
    const dispatch = useDispatch();

const fetchPopularMovies= async ()=>
{
    const popularMovies = await fetch(POPULAR,options);
    const json = await popularMovies.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
}

useEffect(()=>
{
    fetchPopularMovies();
},[]);

}

export default usePopularMovies;