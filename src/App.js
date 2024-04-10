//import AppRoutes from './routes';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Faq from './pages/FAQ/Faq';
import Professores from './pages/Professores/Professores';
import Login from "./components/Usuario/Usuario";
import Header from "./components/Header/Header";
import Playvideo from "./pages/Videopages/videohtml";
import CursoHTML from "./pages/Cursos/html"
import CursosPage from "./pages/Cursos/Cursos"
import CursoDetail from "./components/CursosCard/CursoDetail";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<Faq />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Professores" element={<Professores />} />
        <Route path="/Videopages" element={<Playvideo />} />
        <Route path="/cursos/html" element={<CursoHTML />} />
        <Route path="/Cursos" element={<CursosPage />} />
        {/* Rota para detalhes do curso */}
        <Route path="/Cursos/:id" element={<CursoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;