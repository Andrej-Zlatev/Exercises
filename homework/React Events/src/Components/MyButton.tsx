interface Props {
  label: String;
}

const MyButton = ({ label }: Props) => {
  const handleAlert = (label: string) => {
    console.log(label);
  };

  return (
    <button
      onClick={() => {
        handleAlert(label);
      }}
    >
      {label}
    </button>
  );
};

export default MyButton;
