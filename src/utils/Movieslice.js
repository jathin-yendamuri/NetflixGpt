import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlaying : null,
            mainvideo : null,
            popularmovies : null,
            toprated : null,
            upcoming : null
        },
        reducers:
        {
            addNowPlaying : (state,action)=>
            {
                state.nowPlaying = action.payload;
            },
            addMainTrailer : (state,action)=>
            {
                state.mainvideo = action.payload;
            },
            addPopularMovies : (state,action)=>
            {
                state.popularmovies=action.payload;
            },
            addTopRated : (state,action)=>
            {
                state.toprated = action.payload;
            },
            addUpComing : (state,action)=>
            {
                state.upcoming = action.payload;
            }
            
        }
    }
);


export const {addNowPlaying , addMainTrailer, addPopularMovies, addTopRated , addUpComing} =  Movieslice.actions;
export default Movieslice.reducer;

