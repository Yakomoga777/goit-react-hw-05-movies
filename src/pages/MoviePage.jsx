import { Movies } from 'components/Movies/Movies';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servieses/api';

const MoviePage = () => {
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
      <Movies onFormSubmit={onFormSubmit} movies={movies} location={location} />
    </>
  );
};

export default MoviePage;
