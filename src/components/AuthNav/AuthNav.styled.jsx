import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: bold;
  font-size: 25px;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  &.active {
    color: rgb(100, 156, 202);
  }
`;
