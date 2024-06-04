interface welcomeProps {
  name: string;
  age: number;
}

const Welcome = ({ name, age }: welcomeProps) => {
  return (
    <div>
      <p>
        Welcome {name}! Age: {age}
      </p>
    </div>
  );
};

export default Welcome;
