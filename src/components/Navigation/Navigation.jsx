import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledNav, StyledNavLink } from './Navigation.styled';
// import { StyledNav } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <header>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </StyledNav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <StyledContainer>
            <Outlet />
          </StyledContainer>
        </Suspense>
      </main>
    </>
  );
};
export default Navigation;
