
import React, { useState, useEffect } from 'react';
import './Userscursos.css'; // Importando o arquivo CSS

const UserCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [progressoCursos, setProgressoCursos] = useState({});

  const dadosCursosUsuario = [
    { id: 1, titulo: 'Curso de React', certificado: true, progresso: 50 },
    { id: 2, titulo: 'Curso de JavaScript Avançado', certificado: true, progresso: 75 },
    { id: 3, titulo: 'Curso de Python para Iniciantes', certificado: false, progresso: 25 },
    // Adicione mais cursos conforme necessário
  ];

  useEffect(() => {
    // Simulação de requisição para obter o progresso dos cursos do usuário
    // Normalmente isso viria de uma API
    setTimeout(() => {
      const progresso = {};
      dadosCursosUsuario.forEach(curso => {
        progresso[curso.id] = curso.progresso;
      });
      setProgressoCursos(progresso);
    }, 1000);
  }, []);

  useEffect(() => {
    // Filtrar os cursos com base no filtro atual
    const cursosFiltrados = dadosCursosUsuario.filter(curso =>
      curso.titulo.toLowerCase().includes(filtro.toLowerCase())
    );
    setCursos(cursosFiltrados);
  }, [filtro]);

  const handleFiltroChange = event => {
    setFiltro(event.target.value);
  };

  return (
    <div className="user-cursos-container">
      <h1>Meus Cursos</h1>
      <div className="filtro-container">
        <input
          type="text"
          placeholder="Pesquisar cursos..."
          value={filtro}
          onChange={handleFiltroChange}
        />
      </div>
      <div className="cursos-grid">
        {cursos.map(curso => (
          <div key={curso.id} className="curso-card">
            <h2>{curso.titulo}</h2>
            <p>{progressoCursos[curso.id]}% concluído</p>
            {curso.certificado ? (
              <p>Certificado disponível</p>
            ) : (
              <p>Certificado indisponível</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCursos;
