import React, { useState, useEffect } from 'react';
import './cssSubtitulo.css'; // Importando o arquivo CSS

function Subtitulo() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function verificarVisibilidade() {
            const subtitulo = document.querySelector('.subtitulo');
            if (subtitulo) {
                const posicaoTopo = subtitulo.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                if (posicaoTopo < screenHeight * 0.75) {
                    setIsVisible(true);
                    window.removeEventListener('scroll', verificarVisibilidade);
                }
            }
        }

        window.addEventListener('scroll', verificarVisibilidade);
        verificarVisibilidade(); // Para verificar a visibilidade inicial quando o componente montar

        return () => {
            window.removeEventListener('scroll', verificarVisibilidade);
        };
    }, []);

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
