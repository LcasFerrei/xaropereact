import '../../Style/PerguntaRespostas.css'; // Importa o arquivo index CSS
import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PerguntasRespostas from '../../components/PerguntasRespostas/PerguntasRespostas';




function Faq() {
    return (
      <>
        <PerguntasRespostas />
        <Footer />
      </>
    );
  }

export default Faq;