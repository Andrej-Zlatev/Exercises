import { useForm } from "../useForm";

const WelcomeForm = () => {
  const { handleSubmit, handleFirstName, handleLastName, firstName, lastName } =
    useForm();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleFirstName}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastName}
        value={lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WelcomeForm;
