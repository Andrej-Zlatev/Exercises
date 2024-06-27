import { useState } from "react";
import { User } from "./UserList";

interface Props {
  addUser: (user: User) => void;
}

const RegistrationForm = ({ addUser }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser({ firstName, lastName });
    // setFirstName("");
    // setLastName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
