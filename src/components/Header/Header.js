import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios"; 
import db from '../../database/db.json'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(false);
  const menuRef = useRef(null);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user"); 
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);
  

  const handleLogin = () => {
    const loggedInUser = {
      ...db.usuarios[0], 
      id: db.usuarios[0].id, 
    };
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/"; // Redireciona para a página inicial
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
          <Link to="/login" style={{ textDecoration: "none" }}>
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
            {user && user.userType === "Professor" && ( 
              <li>
                <Link to="/upload" style={{ textDecoration: "none" }}>
                  Área do Professor(a)
                </Link>
              </li>
            )}
            {user && user.userType === "Aluno" && ( 
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
