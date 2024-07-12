import { useContext } from "react";
import { languageContext } from "../context/languageContext";

const ChangeLanguage = () => {
  const { handleLanguage } = useContext(languageContext);
  return (
    <div>
      <button onClick={() => handleLanguage("Macedonian")}>Macedonian</button>
      <button onClick={() => handleLanguage("English")}>English</button>
      <button onClick={() => handleLanguage("French")}>French</button>
    </div>
  );
};

export default ChangeLanguage;
