
import Header from './Header';
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Secondarycontainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRated from '../Hooks/useTopRated';
import useUpComing from '../Hooks/useUpComing';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComing();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <Secondarycontainer/>
    </div>
  )
}

export default Browse;
