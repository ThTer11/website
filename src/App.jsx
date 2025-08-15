import { Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';
import Home from './pages/Home';
import Recherche from './pages/Recherche';
import Enseignements from './pages/Enseignements';
import Conferences from './pages/Conferences';

const LangContext = createContext();
export const useLang = () => useContext(LangContext);

function LangWrapper() {
  const { lang } = useParams();
  const [currentLang, setLang] = useState(lang || 'fr');

  useEffect(() => {
    if (lang && lang !== currentLang) {
      setLang(lang);
    }
  }, [lang, currentLang]);

  return (
    <LangContext.Provider value={{ lang: currentLang, setLang, t: translations[currentLang] }}>
      <Outlet />
    </LangContext.Provider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/fr/" replace />} />
      <Route path="/:lang" element={<LangWrapper />}>
        <Route index element={<Home />} />
        <Route path="recherche" element={<Recherche />} />
        <Route path="enseignements" element={<Enseignements />} />
        <Route path="conferences" element={<Conferences />} />
      </Route>
    </Routes>
  );
}