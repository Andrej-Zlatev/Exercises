import { useLogin } from "../useLogin";

const LoginForm = () => {
  const { isLogged, handlePassword, onSubmit } = useLogin();

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" onChange={handlePassword} />
      <button type="submit" disabled={isLogged}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
