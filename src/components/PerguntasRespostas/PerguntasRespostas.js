import React, { useState } from 'react';

function PerguntasRespostas() {
  // Estado para controlar a visibilidade das respostas
  const [respostasVisiveis, setRespostasVisiveis] = useState(Array(5).fill(false));

  // Função para alternar a visibilidade da resposta
  const alternarResposta = (index) => {
    setRespostasVisiveis(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="container-wrapper faq">
      <div>
        <h1 className="title">Dúvidas<br /><strong>Frequentes</strong></h1>
      </div>

      <div className="accordion-container">
        {[
          {
            pergunta: "Como faço para acessar os cursos na plataforma?",
            resposta: "Para acessar os cursos gratuitos de programação em nossa plataforma, basta criar uma conta gratuita. Depois de fazer login, você terá acesso a todos os cursos disponíveis."
          },
          {
            pergunta: "Quais são os tipos de cursos oferecidos na plataforma?",
            resposta: "Nossa plataforma oferece uma ampla variedade de cursos de programação, incluindo HTML, CSS, JavaScript, Estrutura de Dados e muito mais. Os cursos abrangem desde conceitos básicos até tópicos mais avançados."
          },
          {
            pergunta: "Os cursos possuem algum custo?",
            resposta: "Não, todos os cursos em nossa plataforma são totalmente gratuitos. Nosso objetivo é tornar o aprendizado de programação acessível a todos."
          },
          {
            pergunta: "Como faço para acompanhar meu progresso nos cursos?",
            resposta: "Nesta versão ainda não está disponibilizado o acompanhamento de cursos realizados. Essa funcionalidade será disponibilizada nas futuras releases."
          },
          {
            pergunta: "Posso obter certificados de conclusão dos cursos?",
            resposta: "Sim, após concluir com sucesso um curso, você terá a opção de gerar um certificado de conclusão. Esse certificado pode ser baixado e compartilhado em suas redes profissionais, adicionando valor ao seu currículo."
          }
        ].map((item, index) => (
          <dl className="Duvida" key={index}>
            <dt className="duvida-pergunta main-item" onClick={() => alternarResposta(index)}>
              <span className="duvida-pergunta-texto">
                <strong>0{index + 1}.</strong>
                {item.pergunta}
              </span>
              <button className="duvida-botao expand-icon" aria-expanded={respostasVisiveis[index]} aria-label="Ver Resposta">
                <i className={`bx bxs-left-down-arrow-circle ${respostasVisiveis[index] ? 'rotated' : ''}`}></i>
              </button>
            </dt>
            <dd className={`resposta ${respostasVisiveis[index] ? 'ativo' : ''}`} style={{ color: 'black' }}>
              {item.resposta}
            </dd>
          </dl>
        ))}
      </div>
    </section>
  );
}

export default PerguntasRespostas;









/*import React, { useEffect } from 'react';

function PerguntasRespostas() {
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
    // Adiciona um event listener para cada elemento de pergunta
    document.querySelectorAll('.duvida-pergunta').forEach(pergunta => {
      pergunta.addEventListener('click', toggleResposta);
    });

    // Limpa os event listeners quando o componente é desmontado
    return () => {
      document.querySelectorAll('.duvida-pergunta').forEach(pergunta => {
        pergunta.removeEventListener('click', toggleResposta);
      });
    };
  }, []); // O segundo parâmetro do useEffect está vazio para garantir que este efeito só seja executado uma vez

  return (
    <section className="container-wrapper faq">
      <div>
        <h1 className="title">Dúvidas<br /><strong>Frequentes</strong></h1>
      </div>

      <div className="accordion-container">
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>01.</strong>
              Como faço para acessar os cursos na plataforma?
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none', color: 'black' }}>
            Para acessar os cursos gratuitos de programação em nossa plataforma, basta criar uma conta gratuita. Depois de fazer login, você terá acesso a todos os cursos disponíveis.
          </dd>
        </dl>
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>02.</strong>
              Quais são os tipos de cursos oferecidos na plataforma?
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle bx'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none', color: 'black' }}>
            Nossa plataforma oferece uma ampla variedade de cursos de programação, incluindo HTML, CSS, JavaScript, Estrutura de Dados e muito mais. Os cursos abrangem desde conceitos básicos até tópicos mais avançados.
          </dd>
        </dl>
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>03.</strong>
              Os cursos possuem algum custo?
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle bx'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none', color: 'black' }}>
          Não, todos os cursos em nossa plataforma são totalmente gratuitos. Nosso objetivo é tornar o aprendizado de programação acessível a todos.
          </dd>
        </dl>
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>04.</strong>
              Como faço para acompanhar meu progresso nos cursos?
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle bx'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none', color: 'black' }}>
          Nesta versão ainda não está disponibilizado o acompanhamento de cursos realizados. Essa funcionalidades será disponibilizada nas futuras releases.
          </dd>
        </dl>
        <dl className="Duvida">
          <dt className="duvida-pergunta main-item">
            <span className="duvida-pergunta-texto">
              <strong>05.</strong>
              Posso obter certificados de conclusão dos cursos?
            </span>
            <button className="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
              <i className='bx bxs-left-down-arrow-circle bx'></i>
            </button>
          </dt>
          <dd className="resposta" style={{ display: 'none', color: 'black' }}>
          Sim, após concluir com sucesso um curso, você terá a opção de gerar um certificado de conclusão. Esse certificado pode ser baixado e compartilhado em suas redes profissionais, adicionando valor ao seu currículo.
          </dd>
        </dl>
      </div>
    </section>
  );
}

export default PerguntasRespostas;*/

