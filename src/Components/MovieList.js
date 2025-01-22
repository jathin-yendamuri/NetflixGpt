import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=>

{
    
    return(
        <div>
            <h1 className="text-2xl px-10 ">{title}</h1>
           <div className="flex px-10 mt-3 ml-2 overflow-y-scroll whitespace-nowrap scrollbar-hide ">
            <div className="flex">
              { movies && (movies.map(movie => <MovieCard key={movie.id} path={movie?.poster_path}/>))}
            </div>
           </div>
        </div>
    )
}

export default MovieList;