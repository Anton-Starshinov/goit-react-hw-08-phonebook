import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { UserMenuStyled, MailStyled, ButtonStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  return (
    <UserMenuStyled>
      <MailStyled>Welcome, {user.email}</MailStyled>
      <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonStyled>
    </UserMenuStyled>
  );
};
