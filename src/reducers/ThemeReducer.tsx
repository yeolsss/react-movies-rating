import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.tsx";

const THEME_KEY = "movie_app_theme";

let initialState = JSON.parse(localStorage.getItem(THEME_KEY) || "false");

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state = !state;
      localStorage.setItem(THEME_KEY, JSON.stringify(state));
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme;
export default themeSlice.reducer;
