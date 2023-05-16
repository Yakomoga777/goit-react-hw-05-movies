import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchFilms, getTrending } from 'servieses/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

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
              <Link>{movie.title}</Link>
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
