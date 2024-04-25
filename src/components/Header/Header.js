import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios"; // Importe axios
import db from '../../database/db.json'; // Importe o banco de dados simulado

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursosOpen, setCursosOpen] = useState(false);
  const menuRef = useRef(null);
  const [userName, setUserName] = useState(""); // Estado para armazenar o nome do usuário logado

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCursos = () => {
    setCursosOpen(!cursosOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função para fazer login e definir o nome do usuário
  const handleLogin = async (email) => {
    try {
      // Faz a busca do usuário pelo e-mail no banco de dados simulado
      const user = db.usuarios.find((user) => user.email === email);
      if (user) {
        setUserName(user.nome); // Define o nome do usuário encontrado
      } else {
        console.error("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      // Trate o erro de acordo com sua lógica de frontend
    }
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
        <Link to="/login">
          <i className="bx bx-user bx-sm"></i>
        </Link>
        <div id="menu" onClick={toggleMenu}>
          <i className="bx bx-menu bx-sm"></i>
        </div>
      </div>

      {/* Se o usuário estiver logado, exiba seu nome */}
      {userName && <p>Usuário logado: {userName}</p>}

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
            <li>Reviews</li>
            <li>
              <Link to="/Professores" style={{ textDecoration: "none" }}>
                Professores
              </Link>
            </li>
            <li>Fale Conosco</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
