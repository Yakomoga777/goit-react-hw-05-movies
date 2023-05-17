import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <Navigation /> */}
      <Routes>
        <Route path={'/'} element={<Navigation />}>
          <Route index element={<HomePage />}></Route>
          <Route path={'movies'} element={<MoviePage />}></Route>
          <Route path={'movies/:movieId'} element={<MovieDetailsPage />}>
            <Route path={'cast'} element={<Cast />} />
            <Route path={'reviews'} element={<Reviews />} />
          </Route>
          <Route path={'*'} element={'Page NOT FOUND'}></Route>
        </Route>
      </Routes>
    </div>
  );
};
