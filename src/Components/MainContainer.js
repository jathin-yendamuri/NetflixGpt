import React from 'react'
import VideoBackground from './VideoBackground'
import VideoBackgroundTitle from './VideoBackgroundTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const nowplayingmovies = useSelector(store => store.movies?.nowPlaying);
    if(!nowplayingmovies) return;
    
    const mainMovie = nowplayingmovies[0];
    const {original_title,overview } = mainMovie;
    
    console.log(mainMovie);

  return (
    <div>
      <VideoBackgroundTitle original_title={original_title} overview={overview}/>
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer
