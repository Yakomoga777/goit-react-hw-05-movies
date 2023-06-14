import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servieses/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      try {
        const responseReviews = await getMovieReviews(movieId);

        setReviews(responseReviews.results);
      } catch (error) {
      } finally {
      }
    };

    getCredits();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content} </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
