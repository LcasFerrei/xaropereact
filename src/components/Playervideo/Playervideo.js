function playervideo() {
    return (
        <section className="playervideo">
            <button className="slick-prev"><i className="bx bx-chevron-left"></i></button>

            <div className="video">
                <div className="iframe-container">
                    <iframe width="440" height="315" src="https://www.youtube.com/embed/jer4GLb0dVw" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2 className="playervideo">Historia, evolução e importância do html</h2>
                <p className="playervideo">Um pouco da história da linguagem HTML</p>
            </div>

            <div className="video">
                <div className="iframe-container">
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/WP9E1X2gXJo" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2 className="playervideo">Projeto de Relogio Digital</h2>
                <p className="playervideo">Html, CSS e Javascript em menos de 20 minutos</p>
            </div>

            <div className="video">
                <div className="iframe-container">
                    <iframe width="440" height="315" src="https://www.youtube.com/embed/YnjKn1q_eVg" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2 className="playervideo" style={{ fontSize: '22px' }}>Como Iniciar uma Carreira de Desenvolvedor.</h2>
                <p className="playervideo">Dicas de como iniciar no mundo da programação e Desenvolvimento Web.</p>
            </div>

            <div className="video">
                <div className="iframe-container">
                    <iframe width="440" height="315" src="https://www.youtube.com/embed/JaTf3dhx464" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2 className="playervideo">Logica de Programação</h2>
                <p className="playervideo"> Você nunca mais terá dúvida sobre o que é logica de programação e irá melhorar sua lógica para sempre se colocar em prática a dica que deixo para você! Espero que gostem!</p>
            </div>

            <div className="video">
                <div className="iframe-container">
                    <iframe width="440" height="315" src="https://www.youtube.com/embed/Ejkb_YpuHWs" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2 className="playervideo">Curso de HTML5 e CSS3</h2>
                <p className="playervideo">O Curso de HTML5 e CSS3 vai ensinar a criar sites usando a linguagem de marcação hipertexto (HTML) e  folhas de estilo em cascata (CSS).</p>
            </div>

            <button className="slick-next"><i className="bx bx-chevron-right"></i></button>
        </section>
    );
}

export default playervideo;
