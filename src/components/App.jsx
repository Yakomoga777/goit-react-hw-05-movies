import HomePage from 'pages/HomePage';
import MoviePage from 'pages/MoviePage';
import { Routes, NavLink, Route } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Home } from './Home/Home';
import { Navigation } from './Navigation/Navigation';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <Navigation /> */}
      <Routes>
        <Route path={'/'} element={<Navigation />}>
          <Route index element={<HomePage />}></Route>
          <Route path={'movies'} element={<MoviePage />}></Route>
          <Route path={'movies/:movieId'} element={<MovieDetails />}></Route>
          <Route path={'*'} element={'Page NOT FOUND'}></Route>
        </Route>
      </Routes>
      {/* <Home />
      <Movies />
      <MovieDetails />
      <Cast />
      <Reviews /> */}
    </div>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <GlobalStyle />

//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="dogs" element={<Dogs />} />
//           <Route path="dogs/:dogId" element={<DogDetails />}>
//             <Route path="subbreeds" element={<div>Subbreeds</div>} />
//             <Route path="gallery" element={<Gallery />} />
//           </Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// };
