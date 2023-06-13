import styled from 'styled-components';

export const StyledLinks = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  height: 50px;
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
