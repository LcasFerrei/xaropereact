import React, { useEffect } from 'react';

const Barrinha = () => {
  // Função para expandir ou recolher a resposta
  const toggleResposta = (event) => {
    const resposta = event.target.parentNode.nextElementSibling;
    const botao = event.target;
  
    // Verifica se o elemento de resposta existe
    if (resposta) {
      // Alternar entre expandir e recolher a resposta
      if (resposta.style.display === 'block') {
        resposta.style.display = 'none';
        botao.setAttribute('aria-expanded', 'false');
      } else {
        resposta.style.display = 'block';
        botao.setAttribute('aria-expanded', 'true');
      }
    }
  };
  

  // Efeito para adicionar event listeners após a montagem do componente
  useEffect(() => {
    // Adiciona um event listener para cada botão de pergunta
    document.querySelectorAll('.duvida-botao').forEach(botao => {
      botao.addEventListener('click', toggleResposta);
    });

    // Limpa os event listeners quando o componente é desmontado
    return () => {
      document.querySelectorAll('.duvida-botao').forEach(botao => {
        botao.removeEventListener('click', toggleResposta);
      });
    };
  }, []); // O segundo parâmetro do useEffect está vazio para garantir que este efeito só seja executado uma vez

  return (
    <section>
      {/* Barrinha */}
      <div className="accordion-container">
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>JavaScript</strong>
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none' }}>
            Introdução ao JavaScript<br />
            Manipulação do DOM<br />
            Eventos e Formulários<br />
            Async/Awaitt<br />
          </dd>
        </dl>
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>HTML</strong>
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle bx'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none' }}>
            Conceitos Básicos<br />
            Como fazer um site<br />
            Listas, Tabelas e Formulários<br />
            Semântica HTML<br />
          </dd>
        </dl>
        {/* Adicione outras perguntas e respostas aqui conforme necessário */}
      </div>
    </section>
  );
};

export default Barrinha;
