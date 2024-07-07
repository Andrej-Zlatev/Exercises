import { useInputValue } from "../useInputValue";

const Form = () => {
  const { handleData: emailChange, data: emailValue } = useInputValue();
  const { handleData: passwordChange, data: passwordValue } = useInputValue();

  return (
    <div>
      <input
        type="text"
        id="email"
        onChange={emailChange}
        placeholder="Email"
        value={emailValue}
      />
      <input
        type="password"
        onChange={passwordChange}
        placeholder="Password"
        value={passwordValue}
      />
      <p>{emailValue}</p>
      <p>{passwordValue}</p>
    </div>
  );
};

export default Form;
