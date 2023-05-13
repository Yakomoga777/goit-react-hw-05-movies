import { Cast } from 'components/Cast/Cast';
import React from 'react';
import { Link, Route } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <h2>Component MOVIE-DETAILS</h2>
      <Link to={'cast'}>CasT</Link>
    </>
  );
};
