import { User } from "./Parent";

interface Props {
  sayFnc: (user: User) => void;
}
const Child = ({ sayFnc }: Props) => {
  return (
    <div>
      <button
        onClick={() => {
          sayFnc({ firstName: "Andrej", lastName: "Zlatev" });
        }}
      >
        User
      </button>
    </div>
  );
};

export default Child;
