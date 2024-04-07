import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function CursoHTML() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h2 style={{ color: 'black' }}>Informações sobre o Curso de HTML</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', margin: 'auto', backgroundColor: '#f2f2f2' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Tópico</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Nível</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Iniciante a Avançado</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Duração</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Variável, dependendo do curso</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Conteúdo</td>
            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left', margin: '0', paddingLeft: '20px' }}>
              <ol>
                <ul>Fundamentos do HTML</ul>
                <ul>Estruturação de uma página web</ul>
                <ul>Uso de tags HTML</ul>
                <ul>Formulários e elementos de entrada</ul>
                <ul>Semântica HTML5</ul>
                <ul>Integração com CSS e JavaScript</ul>
              </ol>
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Pré-requisitos</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Nenhum conhecimento prévio é necessário</td>
          </tr>
        </tbody>
      </table>
      <p style={{ color: 'black', fontWeight: 'bold', marginTop: '20px' }}>
        Certificado gratuito e reconhecido pelo MEC
      </p>
      <Footer />
    </div>
  );
}

export default CursoHTML;
