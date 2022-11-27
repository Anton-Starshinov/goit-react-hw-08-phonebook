import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormStyled,
  InputForm,
  ButtonForm,
  LabelForm,
} from 'components/Form/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelForm>
        Username
        <InputForm type="text" name="name" />
      </LabelForm>
      <LabelForm>
        Email
        <InputForm type="email" name="email" />
      </LabelForm>
      <LabelForm>
        Password
        <InputForm type="password" name="password" />
      </LabelForm>
      <ButtonForm type="submit">Register</ButtonForm>
    </FormStyled>
  );
};
