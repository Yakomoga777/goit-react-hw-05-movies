import { Routes, NavLink, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';
import Layout from './Layout/Layout';
import { Gallery } from './Gallery/Gallery';

export const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreeds" element={<div>Subbreeds</div>} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
