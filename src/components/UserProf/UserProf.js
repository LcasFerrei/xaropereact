import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProf.css';

const UserProf = () => {
    const [professor, setProfessor] = useState({});
    const [meusCursos, setMeusCursos] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [user, setUser] = useState({});
  
    useEffect(() => {
      // Obter dados do professor do localStorage
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setProfessor(userData);
        setMeusCursos(userData.meusCursos || []);
        console.log("Meus cursos:", meusCursos);

      }
    }, []);
  
    const handleEditarCurso = (curso) => {
      // Lógica para editar o curso
      console.log("Editar curso:", curso);
    };
  
    const handleExcluirCurso = (curso) => {
      // Lógica para excluir o curso
      console.log("Excluir curso:", curso);
    };
  
    const handlePublicarCurso = (curso) => {
      // Lógica para publicar o curso
      console.log("Publicar curso:", curso);
    };
  
    const handleVerTopicos = () => {
      // Lógica para visualizar os tópicos de dúvidas
      // Por exemplo, você pode redirecionar para uma página separada
      console.log("Ver tópicos de dúvidas");
    };
  
    const filteredCursos = meusCursos.filter(curso => curso.title.toLowerCase().includes(filtro.toLowerCase()));
  
    return (
      <div>
        <h1>Meus Cursos</h1>
        <div className="pesquisa-container">
          <input
            type="text"
            placeholder="Pesquisar cursos..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>
        <div className="cursos-container">
          {filteredCursos.map(curso => (
            <div key={curso.id} className="curso-card">
              <h3>{curso.title}</h3> {/* Aqui está o título sendo exibido */}
              <div className="curso-options">
                <button className="btn-editar" onClick={() => handleEditarCurso(curso)}>Editar</button>
                <button className="btn-excluir" onClick={() => handleExcluirCurso(curso)}>Excluir</button>
                <button className="btn-publicar" onClick={() => handlePublicarCurso(curso)}>Publicar</button>
              </div>
            </div>
          ))}
        </div>
        <div className="topicos-duvidas">
          <h2>Tópicos de Dúvidas Recebidos</h2>
          <button className="btn-ver-topicos" onClick={handleVerTopicos}>Ver Tópicos</button>
          <ul>
            <li>Tópico 1: Como fazer uma requisição HTTP?</li>
            <li>Tópico 2: Qual a diferença entre state e props?</li>
            <li>Tópico 3: Como resolver problemas de layout em CSS?</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default UserProf;
  