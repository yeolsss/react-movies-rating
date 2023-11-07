/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_REACT_APP_MOVIE_KEY: string;
  readonly VITE_REACT_APP_MOVIE_URL: string;
  readonly VITE_IMG_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}