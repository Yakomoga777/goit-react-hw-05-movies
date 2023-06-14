import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 50px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;

  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #e2e2e2;
  }
`;
export const StyledDescription = styled.div`
  padding: 0 10px 0 10px;
`;
export const StyledMovieContainer = styled.div`
  display: flex;
`;

export const StyledBackButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;

  transition: transform 250ms ease-in-out 0s;

  &:hover {
    box-shadow: rgb(198, 200, 204) 5px 5px 5px 0px;
  }
`;
