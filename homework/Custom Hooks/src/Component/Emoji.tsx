import { useKey } from "./useKey";

const Emoji = () => {
  const key = useKey();

  return (
    <div>
      {key === "h" && <p>:)</p>}
      {key === "s" && <p>:(</p>}
    </div>
  );
};

export default Emoji;
