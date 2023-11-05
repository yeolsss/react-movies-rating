import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/ThemeReducer.tsx";
import movieReducer from './reducers/MovieReducer.tsx';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    movieId: movieReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
