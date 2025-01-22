import { useEffect } from "react";
import { options,TOPRATED } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/Movieslice";

const useTopRated = ()=>
{
    const dispatch = useDispatch();

const fetchtopratedMovies= async ()=>
{
    const popularMovies = await fetch(TOPRATED,options);
    const json = await popularMovies.json();
    console.log(json);
    dispatch(addTopRated(json.results));
}

useEffect(()=>
{
    fetchtopratedMovies();
},[]);

}

export default useTopRated;