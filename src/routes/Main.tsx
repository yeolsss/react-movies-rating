import Header from '../components/Header.tsx';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getMovieDetail, getMovies, IMovieApi, IMovieList, IMovieDetail } from '../api/IMovieApi.tsx';
import MovieCard from '../components/MovieCard.tsx';
import { useState } from 'react';
import { useMatch } from 'react-router-dom';


function Main() {
  const { isLoading, data } = useQuery<IMovieList>('moviePopular', getMovies);
  const [toggleModal, setToggleModal] = useState(false);
  const [fullSizeModal, setFullSizeModal] = useState(false);

  const [movieCardMouseOver, setMovieCardMouseOver] = useState<string>('0');

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



  const bigMovieMatch = useMatch('/movies/:movieId');
  const movieId = bigMovieMatch?.params.movieId;
  const {
    isLoading: isDetailLoading,
    data: detailData,
  } = useQuery<IMovieDetail>(['movie', movieId],
    () => getMovieDetail(movieId || ''), { enabled: !!movieId });

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
              {data?.results.map((movie: IMovieApi, index) => (
                <MovieCard 
                key={movie.id} 
                movieData={movie} 
                isModalOpen={setToggleModal} 
                index={index} 
                setMovieCardMouseOver={setMovieCardMouseOver}
                 movieCardMouseOver={movieCardMouseOver}/>
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
            <div onClick={handlerOnClickReSize}></div>
            <div onClick={handlerOnClickFullSize}></div>
          </IconWrapper>
        </ModalHeader>
        <main>
          {isDetailLoading ? (
            <h1>Loading...</h1>
          ) : (
            <ModalMovieInfoWrapper>
              <h1>{detailData?.title}</h1>
              <ModalMovieInfo>
                <img src={import.meta.env.VITE_IMG_PATH+detailData?.poster_path} alt='' />
                <p>{detailData?.overview}</p>
              </ModalMovieInfo>
            </ModalMovieInfoWrapper>
          )}
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
  position: relative;
  flex-direction: row;
  //flex-wrap: wrap;
  height: auto;
  gap: 1rem;
  overflow: scroll;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  /*&::before {
    content: '';
    position: absolute;
    background-color: var(--main-bg-color);
    opacity: 0.9;
    top: 0;
    left:0;
    height: 100%;
    width: 5rem;
    backdrop-filter: blur(0.5rem);
  }*/
`;
const Modal = styled.div<{ $isOpen: boolean, $isFullSize: boolean }>`
  position: fixed;
  width: ${({ $isFullSize }) => $isFullSize ? '100vw' : '80vw'};
  min-width: 120rem;
  height: ${({ $isFullSize }) => $isFullSize ? '100vh' : '80vh'};
  min-height: 50rem;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.8rem);
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

const ModalMovieInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  color: var(--modal-text-color);
  > h1 {
    font-size: 8rem;
    font-weight: bold;
  }
`;

const ModalMovieInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  column-gap: 5rem;
  > img {
    width: 50%;
    max-width: 50rem;
    border-radius: var(--border-radius);
  }
  > p {
    font-size: 2.4rem;
    line-height: 1.4;
    letter-spacing: 0.1rem;
  }
`;