import axios from 'axios';

export interface MovieApi {
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
  results: MovieApi[],
  total_pages: number,
  total_results: number
}


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

export const getMovie = async (movieId: string) => {
  const response = await axios.get(`${import.meta.env.VITE_REACT_APP_MOVIE_BASE_URL}/movie/movie_id/${movieId}?language=ko-KR`, options);

  return response.data;
};