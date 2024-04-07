import React from 'react';
import { Link } from 'react-router-dom';

const CursoCard = ({ curso }) => {
  return (
    <div className="curso-card">
      <div className="imgcursos-container">
        <img src={curso.imagemUrl} alt={curso.titulo} />
      </div>
      <h6>{curso.titulo}</h6>
      <p>{curso.descricao}</p>
      <p>Duração: {curso.duracao}</p>
      <p>Preço: {curso.preco}</p>
      {/* Adicione mais informações do curso conforme necessário */}
      <Link to={`/cursos/${curso.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default CursoCard;
