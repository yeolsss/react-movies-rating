import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/ThemeReducer.tsx";
import movieReducer from './reducers/MovieReducer.tsx';
import isToggleReducer from './reducers/IsToggleReducer.tsx';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    movieId: movieReducer,
    isMovieToggle: isToggleReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
