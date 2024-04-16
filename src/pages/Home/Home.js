import React from 'react';
import '../../Style/index.css'; // Importa o arquivo index CSS
// import './Style/PerguntaRespostas.css'; // Importa o arquivo PerguntaResposta CSS
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner';
import Playervideo from '../../components/Playervideo/Playervideo';
import Subtitulo from '../../components/Subtitulo/Subtitulo';
import Footer from '../../components/Footer/Footer';
import Barrinha from '../../components/Barrinha/Barrinha';
import ListaDeCursos from '../../components/CursosCard/listasdecurso'; // Importa o componente ListaDeCursos
import jsImage from '../../Assets/Cursos/JavaScriptSymbol.png';
import HtmlImage from '../../Assets/Cursos/HTML.png';
import BancoImage from '../../Assets/Cursos/bancodedados.png';
import CssImage from '../../Assets/Cursos/css.png';
import HomePage from '../../components/Feature/ReviewsFutere';
import StudentCommentsAndPodcasts from '../../components/Feature/Podcast';

function Home() {
  return (
    <div>
      {/* Componentes */}
      <Header />
      <Banner />
      <h1>A DOSE CERTA DE CONHECIMENTO PARA SUA JORNADA NA PROGRAMAÇÃO!</h1>
      <p className="sub">Consuma abaixo algumas pílulas de conhecimento para inicar seu aprendizado.</p>
      <Playervideo />
      <Subtitulo />
      {/* Exibir os cards de cursos */}

      <h1>"Não há atalhos para a genialidade? Nunca experimentou os cursos gratuitos de programação do XaropeGenius!"</h1>
      <ListaDeCursos cursos={cursos} />
      <HomePage />
      <StudentCommentsAndPodcasts />
      {/*<Barrinha />*/}
      <Footer />
    </div>
  );
}

export default Home;


// Dados dos cursos
const cursos = [
  {
    imagemUrl: jsImage,
    titulo: 'JavaScript',
    descricao: 'Dominando JavaScript para desenvolvimento web.',
    duracao: '40 Horas',
    preco: <strong>GRATUITO</strong>,
  },
  {
    imagemUrl: HtmlImage,
    titulo: 'Html',
    descricao: 'Dominando Html para desenvolvimento web.',
    duracao: '30 Horas',
    preco: <strong>GRATUITO</strong>
  },
  {
    imagemUrl: CssImage,
    titulo: 'CSS',
    descricao: 'CSS para desenvolvimento web.',
    duracao: '15 Horas',
    preco: <strong>GRATUITO</strong>
  },
  {
    imagemUrl: BancoImage,
    titulo: 'Curso de Banco de Dados',
    descricao: 'Dominando Banco de Dados.',
    duracao: '40 Horas',
    preco: <strong>GRATUITO</strong>
  },
  // Adicione mais cursos conforme necessário
];