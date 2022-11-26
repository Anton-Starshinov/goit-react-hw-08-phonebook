import { useAuth } from 'hooks';
import { Link, NavStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacns</Link>}
    </NavStyled>
  );
};
