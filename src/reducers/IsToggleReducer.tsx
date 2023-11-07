import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.tsx';


const initialState: boolean = false;

const movieToggleSlice = createSlice({
  name: 'isMovieToggleReducer',
  initialState,
  reducers: {
    setIsToggle: (state, action) => {
      return  action.payload.isToggle;
    },
  },
});

export const { setIsToggle } = movieToggleSlice.actions;

export const selectIsToggle = (state: RootState) => state.movieId;

export default movieToggleSlice.reducer;