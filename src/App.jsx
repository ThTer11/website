import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';
import Home from './pages/Home';
import Recherche from './pages/Recherche';
import Enseignements from './pages/Enseignements';
import Conferences from './pages/Conferences';

const LangContext = createContext();
export const useLang = () => useContext(LangContext);

function LangWrapper({ children }) {
  const { lang } = useParams();
  const [currentLang, setLang] = useState(lang || 'fr');

  useEffect(() => {
    if (lang && lang !== currentLang) {
      setLang(lang);
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang: currentLang, setLang, t: translations[currentLang] }}>
      {children}
    </LangContext.Provider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/fr" replace />} />
      <Route path="/:lang" element={<LangWrapper><Home /></LangWrapper>} />
      <Route path="/:lang/recherche" element={<LangWrapper><Recherche /></LangWrapper>} />
      <Route path="/:lang/enseignements" element={<LangWrapper><Enseignements /></LangWrapper>} />
      <Route path="/:lang/conferences" element={<LangWrapper><Conferences /></LangWrapper>} />
    </Routes>
  );
}
