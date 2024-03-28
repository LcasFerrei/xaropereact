const Barrinha = () => {
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
          <dd className="resposta">
            Introdução ao JavaScript<br />
            JavaScript<br />
            JavaScript<br />
            JavaScript<br />
            JavaScript<br />
            JavaScript<br />
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
          <dd className="resposta">
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
          <dd className="resposta">
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
          <dd className="resposta">
            Nesta versão ainda não está disponibilizado o acompanhamento de cursos realizados. Essa funcionalidade será disponibilizada nas futuras releases.
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
          <dd className="resposta">
            Sim, após concluir com sucesso um curso, você terá a opção de gerar um certificado de conclusão. Esse certificado pode ser baixado e compartilhado em suas redes profissionais, adicionando valor ao seu currículo.
          </dd>
        </dl>
        {/* Adicione outras perguntas e respostas aqui conforme necessário */}
      </div>
    </section>
  );
};

export default Barrinha;
