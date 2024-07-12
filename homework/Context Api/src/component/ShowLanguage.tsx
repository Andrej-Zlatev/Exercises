import { useContext } from "react";
import { languageContext } from "../context/languageContext";

const ShowLanguage = () => {
  const { language } = useContext(languageContext);
  return (
    <div>
      <p>Language: {language}</p>
    </div>
  );
};

export default ShowLanguage;
