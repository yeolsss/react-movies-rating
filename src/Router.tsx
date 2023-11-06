import { createBrowserRouter } from "react-router-dom";
import Main from "./routes/Main.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
        children: [
          {
            path: 'movies/:id',
            element: <Main />,
          },
        ],
      },
    ],
  },
]);

export default router;
