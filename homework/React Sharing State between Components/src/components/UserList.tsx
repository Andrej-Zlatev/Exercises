import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

export interface User {
  firstName: string;
  lastName: string;
}
const UserList = () => {
  const [users, setUsers] = useState<User[]>([
    {
      firstName: "John",
      lastName: "Doe",
    },
  ]);

  const handleUser = ({ firstName, lastName }: User) => {
    setUsers([...users, { firstName, lastName }]);
  };

  return (
    <div>
      <RegistrationForm addUser={handleUser} />
      <ul>
        {users.map((user, index) => (
          <div key={index}>
            <li>
              {user.firstName} {user.lastName}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
