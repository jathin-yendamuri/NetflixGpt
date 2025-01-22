import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const Secondarycontainer = ()=>
{
    const movies = useSelector(store => store?.movies?.nowPlaying);
    const popular = useSelector(store=>store?.movies?.popularmovies);
    const toprated = useSelector(store=>store?.movies?.toprated);
    const upcoming = useSelector(store=>store?.movies?.upcoming);
    return (
        movies  && (<div className="bg-black text-white absolute w-screen">
          <div className="-mt-40">
          <MovieList title="Now Playing" movies={movies}/>
           <MovieList title="Top Rated" movies={toprated}/>
           <MovieList title="UpComing" movies={upcoming}/>
           <MovieList title="Popular" movies={popular}/>
           <MovieList title="Tollywood" movies={movies}/>
           <MovieList title="Hollywood" movies={movies}/>
           <MovieList title="Hindi" movies={movies}/>
            </div>
        </div>)
    )
}

export default Secondarycontainer;