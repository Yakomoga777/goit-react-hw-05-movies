import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servieses/api';

export const Movies = () => {
  const [submit, setSubmit] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  //Запам"ятовуємо локацію Хуком useLocation()
  const location = useLocation();
  console.log(location);

  // console.log(searchParams.get('movieId'));

  useEffect(() => {
    if (submit) {
      const getMovies = async () => {
        try {
          const responseSearch = await searchMovies(query);
          setMovies(responseSearch.results);

          console.log(responseSearch.results);
        } catch (error) {
        } finally {
          setSubmit(!submit);
        }
      };

      getMovies();
    }
  }, [query, submit]);

  const onInputChahge = evt => {
    setQuery(evt.target.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ movieId: query });
    setSubmit(!submit);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onInputChahge}
          value={query}
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
