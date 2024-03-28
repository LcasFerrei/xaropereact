import '../../Style/index.css'; // Importa o arquivo index CSS
// import './Style/PerguntaRespostas.css'; // Importa o arquivo PerguntaResposta CSS



import Header from '../../components/Header/Header';
import Banner from '../../components/Banner';
import Playervideo from '../../components/Playervideo/Playervideo';
import Subtitulo from '../../components/Subtitulo/Subtitulo';
import Footer from '../../components/Footer/Footer';
import Barrinha from '../../components/Barrinha/Perguntasfrequentes';




function Home() {
  return (
    
      <div>
          {/* Componentes */}
          <Header />
          <Banner />
          <h1>A DOSE CERTA DE CONHECIMENTO PARA SUA JORNADA NA PROGRAMAÇÃO!</h1>
    <p class="sub">Consuma abaixo algumas pílulas de conhecimento para inicar seu aprendizado.</p>
          <Playervideo />
          <Subtitulo />

          <Barrinha />
          <Footer />
      </div>
    
  );
}

export default Home;

