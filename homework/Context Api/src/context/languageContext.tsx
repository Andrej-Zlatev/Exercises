import { ReactNode, createContext, useState } from "react";

interface childrenProps {
  children: ReactNode;
}

interface contextProps {
  language: string;
  handleLanguage: (lang: string) => void;
}
export const languageContext = createContext({} as contextProps);

const LanguageProvider = ({ children }: childrenProps) => {
  const [language, setLanguage] = useState<string>("Macedonian");
  const handleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <languageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageProvider;
