import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormStyled,
  LabelForm,
  InputForm,
  ButtonForm,
} from 'components/Form/Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Email
        <InputForm type="email" name="email" />
      </LabelForm>
      <LabelForm>
        Password
        <InputForm type="password" name="password" />
      </LabelForm>
      <ButtonForm type="submit">Log In</ButtonForm>
    </FormStyled>
  );
};
