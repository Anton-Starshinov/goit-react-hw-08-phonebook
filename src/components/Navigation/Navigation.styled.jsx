import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 260px;
`;

export const Link = styled(NavLink)`
  font-weight: bold;
  font-size: 25px;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  &.active {
    color: rgb(100, 156, 202);
  }
`;
