import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  width: 830px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledCard = styled.div`
  width: 200px;
  text-align: center;
  border-radius: 10px;

  transition: transform 250ms ease-in-out 0s;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgb(198, 200, 204) 5px 5px 5px 0px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledImg = styled.img`
  border-radius: 10px;
  height: 300px;
`;

export const StyledTitle = styled.p`
  background-color: white;
  border-radius: 10px;
  padding-bottom: 5px;
`;

export const StyledH2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;
