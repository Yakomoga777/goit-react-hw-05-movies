import { Home } from 'components/Home/Home';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'servieses/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies.results);
      } catch (error) {
      } finally {
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <Home movies={movies} location={location} />
    </>
  );
};

export default HomePage;
