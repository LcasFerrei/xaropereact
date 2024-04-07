import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import './ReviewsPod.css';

// Componente para exibir um review de aluno
const ReviewItem = ({ name, comment }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
};

// Componente para exibir um podcast
const PodcastItem = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Componente principal que contém os carrosseis
const HomePage = () => {
  // Dados de exemplo para reviews de alunos
  const reviews = [
    { name: 'Anna Maria', comment: 'Ótimo curso, aprendi muito!' },
    { name: 'Jardiana', comment: 'Excelente material, recomendo!' },
    { name: 'Lucas', comment: 'Excelente melhor do que tomar remedio' },
    // Adicione mais reviews conforme necessário
  ];

  // Dados de exemplo para podcasts
  const future = [
    { title: 'C#', description: 'Do basico ao avançado' },
    { title: 'AWS Cloud', description: 'Primeiros passos na nuvem da Amazon' },
    // Adicione mais podcasts conforme necessário
  ];

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homepage">
      <div className="reviews-carousel">
        <h2><i class='bx bxs-star' ></i> Reviews de Alunos</h2>
        <Slider {...settings}>
          {reviews.slice(0, 5).map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))}
        </Slider>
      </div>
      <div className="podcasts-carousel">
        <h2><i class='bx bx-message-square-add'></i> Em breve...</h2>
        <Slider {...settings}>
          {future.slice(0, 5).map((podcast, index) => (
            <PodcastItem key={index} {...podcast} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
