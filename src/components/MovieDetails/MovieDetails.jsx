import { Cast } from 'components/Cast/Cast';
import { Movies } from 'components/Movies/Movies';
import MoviePage from 'pages/MoviePage';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, Route, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servieses/api';

export const MovieDetails = () => {
  //Використовуємо хук useParams для отримання ДИНАМІЧНОГО ідентифікатора
  const params = useParams();

  const [title, setTitle] = useState('');
  const [popularity, setPopularity] = useState('');
  const [overview, setOverview] = useState('');
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const responseDetails = await getMovieDetails(params.movieId);
        // setMovies(responseSearch.results);
        setTitle(responseDetails.title);
        setPopularity(responseDetails.popularity);
        setOverview(responseDetails.overview);
        setImage(responseDetails.poster_path);
        setGenres(responseDetails.genres);

        // console.log(responseDetails);
      } catch (error) {
      } finally {
      }
    };

    getMovies();
  }, []);

  const gernesNames = genres.map(genre => genre.name).join(', ');

  return (
    <>
      {/* <MoviePage /> */}
      {/* <Movies /> */}
      {/* <h2>Component MOVIE-DETAILS {params.movieId}</h2> */}
      <h2>{title}</h2>
      <p>User Score: {popularity}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt=""
        width="300"
      ></img>

      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{gernesNames}</p>

      <Link to={'cast'}>CasT</Link>
      <Outlet />
    </>
  );
};
