import { MovieApi } from '../api/MovieApi.tsx';
import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieId } from '../reducers/MovieReducer.tsx';


interface IProps {
  movieData: MovieApi;
  isModalOpen:  React.Dispatch<React.SetStateAction<boolean>>;
}

function MovieCard({ movieData, isModalOpen }: IProps) {
  const IMG_PATH = import.meta.env.VITE_IMG_PATH;
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlerOnMouseOverMovieCard = () =>
    setMouseOver(true);

  const handlerOnMouseLeaveMovieCard = () => {
    setMouseOver(false);
  };

  const handlerOnClickMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const target = e.currentTarget as HTMLButtonElement;
    const movieId =target.dataset.movieId;
    dispatch(getMovieId({ movieId }));
    isModalOpen(true);
  };

  return (
    <StyledMovieCard
      data-movie-id={movieData.id}
      $movieImage={movieData.poster_path !== '' ? `${IMG_PATH + movieData.poster_path}` : ''}
      onClick={handlerOnClickMovie}
      onMouseOver={handlerOnMouseOverMovieCard}
      onMouseLeave={handlerOnMouseLeaveMovieCard}
      $isMouseOver={mouseOver}>

      <h1>{movieData.title}</h1>
      <div>
        <p>{movieData.overview}</p>
      </div>
    </StyledMovieCard>
  );
}

export default MovieCard;

const StyledMovieCard = styled.section <{ $movieImage?: string, $isMouseOver?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 34.5rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  height: 50rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  color: var(--sub-text-color);
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  box-shadow: 0 1rem 2.5rem #555e;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${({ $movieImage }) => $movieImage}');
    background-size: cover;
    z-index: -1;
  }

  > h1 {
    font-size: 2.4rem;
    font-weight: bold;
    
  }

  > div {
    margin-top: 5rem;
    transition: opacity 0.2s ease-in;

    opacity: ${({ $isMouseOver }) => $isMouseOver ? '100' : '0'};
  }

  > div > p {
    font-size: 1.6rem;
    letter-spacing: 0.15rem;
    line-height: 1.8rem;
    overflow: scroll;
    scrollbar-width: none;
    font-weight: bold;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;