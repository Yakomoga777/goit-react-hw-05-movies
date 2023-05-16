import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchFilms, getTrending } from 'servieses/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  //Запам"ятовуємо локацію Хуком useLocation()
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const trendingMovies = await getTrending(page);
        setMovies(trendingMovies.results);

        console.log(trendingMovies.results);
      } catch (error) {
      } finally {
      }
    };

    getMovies();
  }, [page]);

  return (
    <>
      <h2>Trending films</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt=""
                    width="200"
                  ></img>
                ) : (
                  <img
                    src={`https://placehold.co/500x750?text=No%20Image`}
                    alt=""
                    width="200"
                  ></img>
                )}
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
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
