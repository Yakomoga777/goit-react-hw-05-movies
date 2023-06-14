import {
  StyledCard,
  StyledImg,
  StyledLink,
  StyledList,
  StyledTitle,
} from 'components/Home/Home.styled';
import { StyledBackButton } from 'pages/MovieDetails.styled';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servieses/api';
import {
  StyledContainer,
  StyledSearchForm,
  StyledSearchInput,
} from './Movies.styled';

export const Movies = ({ onFormSubmit, movies, location }) => {
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
