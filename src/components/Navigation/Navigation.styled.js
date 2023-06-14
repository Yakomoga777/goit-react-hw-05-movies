import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  max-width: 830px;
  border: 1px solid;
  border-radius: 5px;

  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  gap: 10px;
  align-items: center;
  -webkit-box-shadow: 6px 10px 26px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 6px 10px 26px -4px rgba(0, 0, 0, 1);
  box-shadow: 6px 10px 26px -4px rgba(0, 0, 0, 1);
`;

export const StyledNavLink = styled(NavLink)`
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

export const StyledContainer = styled.div`
  max-width: 830px;

  margin-left: auto;
  margin-right: auto;
`;
