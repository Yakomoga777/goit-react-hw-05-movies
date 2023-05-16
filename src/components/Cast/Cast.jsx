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

  // console.log(cast);
  // console.log(photo);

  return (
    <>
      <ul>
        {cast.map(item => {
          // console.log(cast);
          return (
            <li key={item.id}>
              {item.profile_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt=""
                  width="100"
                ></img>
              ) : (
                <img
                  src={`https://placehold.co/500x750?text=No%20Image`}
                  alt=""
                  width="100"
                ></img>
              )}

              {item.name}
              <p>Character: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
