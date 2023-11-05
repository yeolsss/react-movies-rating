import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.tsx';


const initialState: string = '';

const movieSlice = createSlice({
  name: 'movieReducer',
  initialState,
  reducers: {
    getMovieId: (state, action) => {
      return  action.payload.movieId;
    },
  },
});

export const {getMovieId} = movieSlice.actions;

export const selectMovieId = (state: RootState) => state.movieId;

export default movieSlice.reducer;