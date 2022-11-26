import { AuthNavConteiner, LinkStyled } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthNavConteiner>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </AuthNavConteiner>
  );
};
