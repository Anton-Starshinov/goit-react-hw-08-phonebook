import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  font-weight: bold;
  font-size: 35px;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    color: rgb(100, 156, 202);
  }
`;
