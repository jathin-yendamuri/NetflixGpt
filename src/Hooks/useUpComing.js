import { useEffect } from "react";
import { options,UPCOMING } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComing } from "../utils/Movieslice";

const useUpComing = ()=>
{
    const dispatch = useDispatch();

const fetchupcomingMovies= async ()=>
{
    const popularMovies = await fetch(UPCOMING,options);
    const json = await popularMovies.json();
    console.log(json);
    dispatch(addUpComing(json.results));
}

useEffect(()=>
{
    fetchupcomingMovies();
},[]);

}

export default useUpComing;