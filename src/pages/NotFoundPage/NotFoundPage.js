import { Link } from 'react-router-dom';
import { ConteinerHome, TextStyled } from 'pages/Home/Home.styled';
import { LinkStyled } from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <ConteinerHome>
      <TextStyled>
        Sorry, this page not found <LinkStyled to="/">Go to Home</LinkStyled>
      </TextStyled>
    </ConteinerHome>
  );
};
