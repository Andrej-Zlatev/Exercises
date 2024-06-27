import Child from "./Child";

export interface User {
  firstName: string;
  lastName: string;
}
const Parent = () => {
  const saySomething = (user: User) => {
    console.log(user);
  };

  return (
    <div>
      <p>Parent</p>
      <Child sayFnc={saySomething} />
    </div>
  );
};

export default Parent;
