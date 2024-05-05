import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./cursosxaropes.css";
import xaropecursos from '../../database/db.json';

function CursoXarope({ id, titulo, descricao, link, imagem, user, onInscricao }) {
  const [inscrito, setInscrito] = useState(false);

  useEffect(() => {
    if (user && user.cursosInscritos) {
      setInscrito(user.cursosInscritos.includes(titulo));
    }
  }, [user, id]);
  

  const handleInscricao = (event) => { 
    event.preventDefault(); 
    if (!inscrito) {
      onInscricao({ id, titulo, descricao, link, imagem }); 
      setInscrito(true);
    }
  };
  
  return (
    <div className="curso">
      <Link to={`/Cursos/${id}`}>
        <img src={imagem} alt={titulo} />
        <h2>{titulo}</h2> 
        <p>{descricao}</p> 
        <a href={link} target="_blank" rel="noopener noreferrer">Saiba mais</a> 
        {user && !inscrito && (
          <button className="inscrever-button" onClick={handleInscricao}>Inscrever-se</button>
        )}
        {inscrito && (
          <button className="cursando-button">Cursando</button>
        )}
      </Link>
    </div>
  );
}

function PaginaCursos() {
  const [user, setUser] = useState(null);
  const [cursos, setCursos] = useState(null);
  const [filtro, setFiltro] = useState(''); // Estado para armazenar o filtro de pesquisa

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setCursos(xaropecursos.Xaropecursos);
  }, []);

  const handleInscricao = (curso) => {
    if (!user) {
      console.error("Usuário não está logado.");
      return;
    }

    // Verifica se o usuário já está inscrito no curso
    if (!user.cursosInscritos.includes(curso.titulo)) {
      // Adiciona o novo curso à lista de cursos inscritos
      const newUser = { ...user, cursosInscritos: [...user.cursosInscritos, curso.titulo] };
      
      // Atualiza os dados do usuário no localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      // Atualiza os dados do usuário no servidor (se necessário)
      axios.put(`http://localhost:3001/usuarios/${user.id}`, newUser);

      console.log(`Usuário ${user.nome} inscrito no curso: ${curso.titulo}`);

      // Atualiza o estado para refletir a inscrição
      setUser(newUser);
    } else {
      console.log(`O usuário ${user.nome} já está inscrito no curso ${curso.titulo}`);
    }
  };

  const handlePesquisa = (event) => {
    setFiltro(event.target.value);
  };
  
  const cursosFiltrados = cursos?.filter(curso => 
    curso.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="pagina-cursos">
      <h1>Cursos Gratuitos de Programação e Desenvolvimento Web</h1>
      <div className="pesquisa-container">
        <input
          type="text"
          placeholder="Pesquisar cursos..."
          value={filtro}
          onChange={handlePesquisa}
        />
      </div>
      <div className="lista-cursos">
        {cursosFiltrados?.map((curso, index) => (
          <CursoXarope 
            key={index} 
            {...curso} 
            user={user} 
            onInscricao={handleInscricao} 
          />
        ))}
      </div>
    </div>
  );
}

export default PaginaCursos;
