import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { HeaderStyled, ContainerStyled } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <ContainerStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ContainerStyled>
    </HeaderStyled>
  );
};
