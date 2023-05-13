import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
      <Outlet />
    </>
  );
};
