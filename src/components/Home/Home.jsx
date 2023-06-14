import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'servieses/api';
import {
  StyledCard,
  StyledH2,
  StyledImg,
  StyledLink,
  StyledList,
  StyledTitle,
} from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  //Запам"ятовуємо локацію Хуком useLocation()
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies.results);

        console.log(trendingMovies.results);
      } catch (error) {
      } finally {
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <StyledH2>Trending films</StyledH2>
      <StyledList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledCard>
                <StyledLink
                  to={`movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.profile_path !== null ? (
                    <StyledImg
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt=""
                      width="200"
                    ></StyledImg>
                  ) : (
                    <StyledImg
                      src={`https://placehold.co/500x750?text=No%20Image`}
                      alt=""
                      width="200"
                    ></StyledImg>
                  )}
                  <StyledTitle>{movie.title}</StyledTitle>
                </StyledLink>
              </StyledCard>
            </li>
          );
        })}
      </StyledList>
    </>
  );
};

// const trandingFilms = fetchFilms();
// console.log(trandingFilms);
// useEffect(() => {
//   console.log('Did Mount');

//   const getMovies = async () => {
//     try {
//       const response = await getTrending();
//       console.log(response);
//     } catch (error) {}

//     getMovies();
//   };
// }, []);
