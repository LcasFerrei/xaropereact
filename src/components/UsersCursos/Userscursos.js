import React, { useState, useEffect } from 'react';
import "./Userscursos.css";

const UserCurso = () => {
  const [user, setUser] = useState({});
  const [cursosInscritos, setCursosInscritos] = useState([]);
  const [filtro, setFiltro] = useState("");
  
  useEffect(() => {
    // Obtendo dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setCursosInscritos(userData.cursosInscritos || []); // Obtendo os cursos inscritos do usuário
    }
  }, []);

  const handleDesinscrever = (curso) => {
    // Lógica para desinscrever-se do curso
    // Por exemplo, você pode enviar uma requisição para sua API para remover o curso inscrito do usuário
    // Depois, atualize o estado de cursosInscritos para refletir a mudança
    const updatedCursos = cursosInscritos.filter(c => c !== curso);
    setCursosInscritos(updatedCursos);
    // Atualize também o localStorage para manter os dados atualizados
    const updatedUser = { ...user, cursosInscritos: updatedCursos };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const filteredCursos = cursosInscritos.filter(curso => curso.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <div>
      <h1>Cursos Inscritos</h1>
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
          <div key={curso} className="curso-card">
            <h3>{curso}</h3>
            <p>Progresso: XX%</p>
            <button className="btn-desinscrever" onClick={() => handleDesinscrever(curso)}>Desinscrever-se</button>
          </div>
        ))}
      </div>
      <div className="certificados-disponiveis">
        <h2>Certificados Disponíveis</h2>
        <ul>
        <li>
        <i className='bx bxs-download'></i> Curso de Introdução ao HTML - Concluído em 12/04/2024
        </li>
        <li>
        <i className='bx bxs-download'></i> Curso de JavaScript Avançado - Concluído em 20/04/2024
        </li>
        <li>
        <i className='bx bxs-download'></i> Curso de React.js - Concluído em 28/04/2024
        </li>
        </ul>
        {/* Adicione aqui a lista de certificados disponíveis */}
      </div>
    </div>
  );
};

export default UserCurso;
