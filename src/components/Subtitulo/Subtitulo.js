import React, { useState, useEffect } from 'react';
import './cssSubtitulo.css'; // Importando o arquivo CSS

function Subtitulo() {
    // Estado para controlar a visibilidade do subtitulo
    const [isVisible, setIsVisible] = useState(false);

    // Efeito para verificar a visibilidade do subtitulo ao rolar a página
    useEffect(() => {
        // Função para verificar se o subtitulo está visível na tela
        function verificarVisibilidade() {
            // Seleciona o elemento do subtitulo
            const subtitulo = document.querySelector('.subtitulo');
            if (subtitulo) {
                // Obtém a posição do topo do subtitulo em relação à janela de visualização
                const posicaoTopo = subtitulo.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                // Verifica se o subtitulo está a 75% da altura da tela
                if (posicaoTopo < screenHeight * 0.75) {
                    // Define o subtitulo como visível e remove o evento de rolagem
                    setIsVisible(true);
                    window.removeEventListener('scroll', verificarVisibilidade);
                }
            }
        }
        // Adiciona um evento de rolagem para verificar a visibilidade
        window.addEventListener('scroll', verificarVisibilidade);
        // Verifica a visibilidade inicial quando o componente é montado
        verificarVisibilidade();

        // Limpa o evento de rolagem quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', verificarVisibilidade);
        };
    }, []); // Array de dependências vazio, efeito só é executado uma vez

    return (
        <div className={`subtitulo ${isVisible ? 'aparecer' : ''}`}>
            <h3>Visão do Projeto</h3>
            <p className="textosub">Seja bem-vindo à nossa Plataforma Web de Cursos!</p>
            <p className="textosub">Um projeto desenvolvido por estudantes do Curso de Análise e Desenvolvimento de Sistemas da Unifor.</p>
            <p className="textosub">Aqui, oferecemos uma variedade de cursos gratuitos para ajudar você a expandir seus conhecimentos e aprimorar suas habilidades sobre Desenvolvimento Web e outros aspectos de programação.</p>
            <p className="textosub">Nossa plataforma foi cuidadosamente projetada e desenvolvida com o objetivo de proporcionar uma experiência de aprendizado acessível, dinâmica e enriquecedora.</p>
            <p className="textosub">Esperamos que você aproveite ao máximo os recursos disponíveis na <strong><em style={{ color: 'rgb(0, 0, 0)', WebkitTextStroke: '0.5px 0.95 rgb(39, 39, 110)' }}>XaropeGenius</em></strong> e se junte a nós nessa jornada de crescimento e gotas de descoberta.</p>
        </div>
    );
}

export default Subtitulo;
