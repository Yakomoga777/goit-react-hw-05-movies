import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servieses/api';
import { StyledInfo, StyledLi } from './Cast.styled';
// import { getMovieCredits } from 'servieses/api';

const Cast = () => {
  //Використовуємо хук useParams для отримання ДИНАМІЧНОГО ідентифікатора
  const { movieId } = useParams();
  // console.log(params);

  const [cast, setCast] = useState([]);

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

  return (
    <>
      <ul>
        {cast.map(item => {
          return (
            <StyledLi key={item.cast_id}>
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
              <StyledInfo>
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </StyledInfo>
            </StyledLi>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
