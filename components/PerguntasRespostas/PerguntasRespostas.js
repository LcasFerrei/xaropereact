function PerguntasRespostas() {
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
            <dd className="resposta">
              Para acessar os cursos gratuitos de programação em nossa plataforma, basta criar uma conta gratuita. Depois de fazer login, você terá acesso a todos os cursos disponíveis.
            </dd>
          </dl>
          <dl class="Duvida">
            <dt class="duvida-pergunta main-item">
                <span class="duvida-pergunta-texto">
                    <strong>02.</strong>
                    Quais são os tipos de cursos oferecidos na plataforma?
                </span>
                <button class="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
                    <i class='bx bxs-left-down-arrow-circle bx'></i>
                </button>
            </dt>
            <dd class="resposta">
                Nossa plataforma oferece uma ampla variedade de cursos de programação, incluindo HTML, CSS, JavaScript, Estrutura de Dados e muito mais. Os cursos abrangem desde conceitos básicos até tópicos mais avançados.
            </dd>
        </dl>
        <dl class="Duvida">
          <dt class="duvida-pergunta main-item">
              <span class="duvida-pergunta-texto">
                  <strong>03.</strong>
                  Os cursos possuem algum custo?
              </span>
              <button class="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
                  <i class='bx bxs-left-down-arrow-circle bx'></i>
              </button>
          </dt>
          <dd class="resposta">
            Não, todos os cursos em nossa plataforma são totalmente gratuitos. Nosso objetivo é tornar o aprendizado de programação acessível a todos.
          </dd>
        </dl>
        <dl class="Duvida">
            <dt class="duvida-pergunta main-item">
                <span class="duvida-pergunta-texto">
                    <strong>04.</strong>
                    Como faço para acompanhar meu progresso nos cursos?
                </span>
                <button class="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
                    <i class='bx bxs-left-down-arrow-circle bx'></i>
                </button>
            </dt>
            <dd class="resposta">
            Nesta versão ainda não está disponibilizado o acompanhamento de cursos realizados. Essa funcionalidades será disponibilizada nas futuras releases.
            </dd>
         </dl>
         <dl class="Duvida">
            <dt class="duvida-pergunta main-item">
                <span class="duvida-pergunta-texto">
                    <strong>05.</strong>
                    Posso obter certificados de conclusão dos cursos?
                </span>
                <button class="duvida-botao expand-icon" aria-expanded="false" aria-label="Ver Resposta">
                    <i class='bx bxs-left-down-arrow-circle bx'></i>
                </button>
            </dt>
            <dd class="resposta">
                Sim, após concluir com sucesso um curso, você terá a opção de gerar um certificado de conclusão. Esse certificado pode ser baixado e compartilhado em suas redes profissionais, adicionando valor ao seu currículo.
            </dd>
         </dl>
        </div>
      </section>
    );
}
  
export default PerguntasRespostas;
  