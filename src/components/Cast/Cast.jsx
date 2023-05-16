import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servieses/api';
// import { getMovieCredits } from 'servieses/api';

export const Cast = () => {
  //Використовуємо хук useParams для отримання ДИНАМІЧНОГО ідентифікатора
  const { movieId } = useParams();
  // console.log(params);

  const [cast, setCast] = useState([]);

  // const [overview, setOverview] = useState('');
  // const [image, setImage] = useState('');
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      try {
        const responseDetails = await getMovieCredits(movieId);
        // setCast(responseDetails);
        setCast(responseDetails.cast);
      } catch (error) {
      } finally {
      }
    };

    getCredits();
  }, [movieId]);

  console.log(cast);
  // console.log(photo);

  return (
    <>
      <h3>{`CAST-COMPONENT ${movieId}`}</h3>
      <ul>
        {cast.map(item => {
          console.log(cast);
          return (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt=""
                width="100"
              ></img>
              {item.name}
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
