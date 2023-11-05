import Header from '../components/Header.tsx';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getMovies, MovieApi, IMovieList, getMovie } from '../api/MovieApi.tsx';
import MovieCard from '../components/MovieCard.tsx';
import { useSelector } from 'react-redux';
import { selectMovieId } from '../reducers/MovieReducer.tsx';
import { useState } from 'react';


function Main() {
  const movieId = useSelector(selectMovieId);
  const { isLoading, data } = useQuery<IMovieList>('moviePopular', getMovies);

  const [toggleModal, setToggleModal] = useState(false);
  const [fullSizeModal, setFullSizeModal] = useState(false);

  // get api
  const handlerOnClickModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  const handlerOnClickFullSize = () => {
    setFullSizeModal(true);
  };
  const handlerOnClickReSize = () => {
    setFullSizeModal(false);
  };

  return (
    <>
      <Container>
        <Header />
        <MovieContainer>

          <h2>Movie List</h2>
          {isLoading ? (
            <h1>Loading...!</h1>
          ) : (
            <MovieCards>
              {data?.results.map((movie: MovieApi) => (
                <MovieCard key={movie.id} movieData={movie} isModalOpen={setToggleModal} />
              ))}
            </MovieCards>
          )}
        </MovieContainer>
      </Container>
      <Modal
        $isOpen={toggleModal}
        $isFullSize={fullSizeModal}
      >
        <ModalHeader>
          <IconWrapper>
            <div onClick={handlerOnClickModalToggle}></div>
            <div onClick={handlerOnClickFullSize}></div>
            <div onClick={handlerOnClickReSize}></div>
          </IconWrapper>
        </ModalHeader>
        <main>

        </main>
      </Modal>
    </>
  );
}

export default Main;

const Container = styled.div`
  max-width: 144rem;
  min-width: 80rem;
  margin: 0 auto;
  padding-bottom: 10rem;
  height: auto;
`;
const MovieContainer = styled.section`
  margin-top: 4rem;
  height: auto;

  > h2 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;
const MovieCards = styled.section`
  width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  gap: 1rem;
`;
const Modal = styled.div<{ $isOpen: boolean, $isFullSize: boolean }>`
  position: fixed;
  width: ${({ $isFullSize }) => $isFullSize ? '100vw' : '80vw'};
  min-width: 120rem;
  height: ${({ $isFullSize }) => $isFullSize ? '100vh' : '80vh'};
  min-height: 50rem;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.5rem);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0.2rem 0.5rem #555e;
  transition: opacity 0.3s ease-in, width 0.3s ease-in, height 0.3s ease-in;
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
`;

const ModalHeader = styled.header`
  height: 5rem;
  background-color: var(--modal-header);

`;

const IconWrapper = styled.section`
  display: flex;
  width: 10rem;
  height: 100%;
  justify-content: center;
  align-items: center;

  > div {
    width: 2rem;
    height: 2rem;
    background-color: aliceblue;
    border-radius: 1rem;
    transition: opacity 0.2s ease-in;
    cursor: pointer;
    opacity: .6;

    &:first-child {
      background-color: #eb3b5a;
    }

    &:nth-child(2) {
      margin: 0 1rem;
      background-color: #fa8231;
    }

    &:last-child {
      background-color: #20bf6b;
    }

    &:hover {
      opacity: 1;
    }
  }
`;