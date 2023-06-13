import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledNav } from './Navigation.styled';
// import { StyledNav } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <header>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </StyledNav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Navigation;
