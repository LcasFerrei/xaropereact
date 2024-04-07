//import AppRoutes from './routes';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Faq from './pages/FAQ/Faq';
import Professores from './pages/Professores/Professores';
import Login from "./components/Usuario/Usuario";
import Header from "./components/Header/Header";
import Playvideo from "./pages/Videopages/videohtml";
import CursoHTML from "./pages/Cursos/html"
import Jscurso from "./pages/Cursos/js";
import CursosPage from "./pages/Cursos/Cursos"



function App(){
  return(
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FAQ" element={<Faq />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Professores" element={<Professores />}></Route>
        <Route path="/Videopages" element={<Playvideo/>}></Route>
        <Route path="/cursos/html" element={<CursoHTML />} />
        <Route path="/Cursos" element={<CursosPage/>}></Route>
        <Route path="/cursos/:id" element={<Jscurso />} /> {/* Nova rota para a página de detalhes do curso */}
        <Route path="/Cursos" element={<CursosPage />}></Route>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App;