import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servieses/api';

const Reviews = () => {
  const { movieId } = useParams();
  // console.log(params);

  const [reviews, setReviews] = useState([]);

  // const [overview, setOverview] = useState('');
  // const [image, setImage] = useState('');
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      try {
        const responseReviews = await getMovieReviews(movieId);
        console.log(responseReviews.results);
        setReviews(responseReviews.results);
      } catch (error) {
      } finally {
      }
    };

    getCredits();
  }, [movieId]);

  return (
    <>
      {reviews.map(item => {
        return (
          <>
            <h3>Author: {item.author}</h3>
            <p>{item.content} </p>
          </>
        );
      })}
    </>
  );
};

export default Reviews;
