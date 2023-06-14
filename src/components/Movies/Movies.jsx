import {
  StyledCard,
  StyledImg,
  StyledLink,
  StyledList,
  StyledTitle,
} from 'components/Home/Home.styled';
import { StyledBackButton } from 'pages/MovieDetails.styled';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servieses/api';
import {
  StyledContainer,
  StyledSearchForm,
  StyledSearchInput,
} from './Movies.styled';

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
    <StyledContainer>
      <StyledSearchForm onSubmit={onFormSubmit}>
        <StyledSearchInput
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          // onChange={onInputChahge}
          // value={query}
        />
        <StyledBackButton type="submit">Search</StyledBackButton>
      </StyledSearchForm>
      <StyledList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledCard>
                <StyledLink to={`${movie.id}`} state={{ from: location }}>
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
    </StyledContainer>
  );
};
