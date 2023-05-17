import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servieses/api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  //Запам"ятовуємо локацію Хуком useLocation()
  const location = useLocation();

  // console.log(searchParams.get('movieId'));

  useEffect(() => {
    const getMovies = async () => {
      try {
        const responseSearch = await searchMovies(movieQuery);
        setMovies(responseSearch.results);
      } catch (error) {
      } finally {
        // setSubmit(!submit);
      }
    };

    getMovies();
  }, [movieQuery]);

  //
  const onFormSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value;
    setSearchParams({ query });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          // onChange={onInputChahge}
          // value={query}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
