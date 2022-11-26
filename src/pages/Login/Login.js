import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterConteiner } from 'pages/Register/Register.styled';

export default function Login() {
  return (
    <RegisterConteiner>
      <LoginForm />
    </RegisterConteiner>
  );
}
