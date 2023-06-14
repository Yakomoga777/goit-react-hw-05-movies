import {
  StyledCard,
  StyledH2,
  StyledImg,
  StyledLink,
  StyledList,
  StyledTitle,
} from './Home.styled';

export const Home = ({ movies, location }) => {
  return (
    <>
      <StyledH2>Trending films</StyledH2>
      <StyledList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <StyledCard>
                <StyledLink
                  to={`movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.profile_path !== null ? (
                    <StyledImg
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt=""
                      width="200"
                    ></StyledImg>
                  ) : (
                    <StyledImg
                      src={`https://placehold.co/500x750?text=No%20Image`}
                      alt=""
                      width="200"
                    ></StyledImg>
                  )}
                  <StyledTitle>{movie.title}</StyledTitle>
                </StyledLink>
              </StyledCard>
            </li>
          );
        })}
      </StyledList>
    </>
  );
};
