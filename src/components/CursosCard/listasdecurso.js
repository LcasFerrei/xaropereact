import React from 'react';
import CursoCard from './cursoscard';

const ListaDeCursos = ({ cursos }) => {
  
  return (
    <div className="lista-de-cursos">
      {cursos.map((curso, index) => (
        <CursoCard key={index} curso={curso} />
      ))}
    </div>
  );
};

export default ListaDeCursos;
