import axios from 'axios';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_REACT_APP_MOVIE_KEY,
  },
};

export const getMovies = async () => {
  const response = await axios.get(`${import.meta.env.VITE_REACT_APP_MOVIE_BASE_URL}/movie/popular?language=ko-KR&page=1`, options);
  return response.data;
};

export const getMovieDetail = async (movieId: string) => {
  const response = await axios.get(`${import.meta.env.VITE_REACT_APP_MOVIE_BASE_URL}/movie/${movieId}?language=ko-KR`, options);

  return response.data;
};

export interface IMovieApi {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface IMovieList {
  page: number
  results: IMovieApi[],
  total_pages: number,
  total_results: number
}

export interface IGenres {
  id: number,
  name: string
}

interface IProductionCompanies {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

interface IProductionCountries {
  iso_3166_1: string,
  name: string
}

interface ISpokenLanguages {
  english_name: string,
  iso_639_1: string,
  name: string
}

export interface IMovieDetail {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: any,
  budget: number,
  genres: IGenres[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: IProductionCompanies[],
  production_countries: IProductionCountries[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ISpokenLanguages[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
