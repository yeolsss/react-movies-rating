import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme.ts";
import { useSelector } from "react-redux";
import { selectTheme } from "./reducers/ThemeReducer.tsx";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const isTheme = useSelector(selectTheme);
  return (
    <>
      <ThemeProvider theme={isTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </>
  );
}

export default App;
