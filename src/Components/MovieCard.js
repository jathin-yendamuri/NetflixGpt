const MovieCard = ({path})=>
{
    return (
        <div className="w-40 flex-shrink-0 mr-4">
            <img alt="now_playing" src={"https://image.tmdb.org/t/p/w500"+path}/>
        </div>
    )
}

export default MovieCard;