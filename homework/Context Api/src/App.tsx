import "./App.css";

import ChangeLanguage from "./component/ChangeLanguage";
import ShowLanguage from "./component/ShowLanguage";
import LanguageProvider from "./context/languageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <ChangeLanguage />
        <ShowLanguage />
      </LanguageProvider>
    </>
  );
}

export default App;
