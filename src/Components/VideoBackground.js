import {useSelector } from "react-redux";
import useFetchtrailer from "../Hooks/useFetchtrailer";

const VideoBackground = ({movieId})=>
{
    const selector = useSelector(store =>store.movies?.mainvideo);
    console.log(selector?.key);

    useFetchtrailer(movieId);

    return (
        <div className="-mt-28">
           <iframe 
           className="w-screen aspect-video top-0 left-0"
           src={"//www.youtube.com/embed/"+selector?.key+"?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"} 
           title="YouTube video player" 
           frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen ="allowFullScreen"
             ></iframe>
        </div>
    )
}

export default VideoBackground;

