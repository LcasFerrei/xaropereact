import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios"; // Importe axios
import db from '../../database/db.json'; // Importe o banco de dados simulado

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(false);
  const menuRef = useRef(null);
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado

  useEffect(() => {
    // Verifica se há um usuário logado
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);
  

  const handleLogin = () => {
    // Simula o login e define o usuário
    const loggedInUser = {
      nome: db.usuarios[0].nome,
      userType: db.usuarios[0].userType
    };
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    // Limpa o usuário do armazenamento local ao fazer logout
    localStorage.removeItem("user");
    setUser(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCursos = () => {
    setCursosOpen(!cursosOpen);
  };

  return (
    <header id="header">
      <a href="index.html" className="inicial">
        <Link to="/">
          <div className="DivTeste"><i className="bx bxs-capsule">XaropeGenius</i></div>
        </Link>
      </a>

      <ul className="navegação">
        <Link to="/login" style={{ textDecoration: "none" }}>
          Inscreva-se
        </Link>
        <Link to="/Professores" style={{ textDecoration: "none" }}>
          Professores
        </Link>
        <Link to="/Faq" style={{ textDecoration: "none" }}>
          Dúvidas Frequentes
        </Link>
        <Link to="/Cursos" style={{ textDecoration: "none" }}>
          Cursos
        </Link>
      </ul>

      <div className="header-icons">
        {user ? (
          <>
            <p>Usuário: {user.nome} ({user.userType})</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" onClick={() => handleLogin(db.usuarios[0].nome, db.usuarios[0].userType)}>
            <i className="bx bx-user bx-sm"></i>
          </Link>
        )}
        <div id="menu" onClick={toggleMenu}>
          <i className="bx bx-menu bx-sm"></i>
        </div>
      </div>

      {menuOpen && (
        <div className="menu-container" ref={menuRef}>
          <ul className="menu">
            <li onClick={toggleCursos}>Cursos</li>
            {cursosOpen && (
              <ul>
                <li>
                  <Link to="/cursos/html">HTML</Link>
                </li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            )}
            <li>
              <Link to="/Faq" style={{ textDecoration: "none" }}>
                Dúvidas Frequentes
              </Link>
            </li>
            <li>Podcast</li>
            {user && user.userType === "Professor" && ( // Mostra apenas se o usuário for um professor
              <li>
                <Link to="/upload" style={{ textDecoration: "none" }}>
                  Área do Professor(a)
                </Link>
              </li>
            )}
            {user && user.userType === "Aluno" && ( // Mostra apenas se o usuário for um aluno
              <li>
                <Link to="/Usuarioarea" style={{ textDecoration: "none" }}>
                  Área do Aluno
                </Link>
              </li>
            )}
            <li>
              <Link to="/Faq" style={{ textDecoration: "none" }}>
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
