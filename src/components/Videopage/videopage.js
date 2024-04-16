import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './videopage.css';
import videoSrc from './teste.mp4'; // Importando o vídeo local
import LeoneVid from './leoneaula.mp4';
import { Link } from 'react-router-dom';

const VideoPage = () => {
  // Estado para armazenar os comentários
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [videosWatched, setVideosWatched] = useState(0); // Estado para acompanhar o número de vídeos assistidos

  // Número total de vídeos no curso
  const totalVideos = 10; 
  
  // Função para lidar com o envio de comentários
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  // Função para lidar com o aumento do número de vídeos assistidos
  const handleVideoWatched = () => {
    setVideosWatched(videosWatched + 1);
  };

  // Calcular a porcentagem de conclusão do curso
  const completionPercentage = (videosWatched / totalVideos) * 100;

  return (
    <div className="video-page">
      <h1 className="video-title">Status Projeto Xarope</h1>
      
      <div className="video-container">
        {/* Video principal */}
        <div className="video-wrapper">
          <ReactPlayer
            className="react-player"
            url={videoSrc}
            width="100%"
            height="100%"
            controls
            onEnded={handleVideoWatched} // Chama a função quando o vídeo termina
          />
        </div>
        <div className="video-details">
          {/* Descrição do vídeo */}
          <p className="video-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget est mauris. Proin nec scelerisque
            enim. In euismod nulla at nisi consectetur, non efficitur lorem dapibus. Duis tincidunt magna ac lacus
            ullamcorper fermentum. Morbi laoreet odio eget ullamcorper efficitur. In sit amet dictum ipsum.
          </p>
        </div>
      </div>

      <div className="related-videos">
        {/* Vídeos relacionados */}
        <h2 style={{color: 'purple'}}>Vídeos Relacionados</h2>
        <div className="related-videos-list">
          <div className="related-video">
          <Link to="/VideoPage">
              <ReactPlayer
                className="related-video-player"
                url={videoSrc}
                width="150px"
                height="100px"
                controls
              />  
              <p>Video 1</p> {/* Envolve o texto em um componente Link */}
            </Link>
          </div>
          <div className="related-video">
          <ReactPlayer
              className="related-video-player"
              url={LeoneVid }
              width="150px"
              height="100px"
              controls
            />
            <p>Video 2</p>
          </div>
          <div className="related-video">
          <ReactPlayer
              className="related-video-player"
              url={videoSrc}
              width="150px"
              height="100px"
              controls
            />
            <p>Video 3</p>
          </div>
          <div className="related-video">
          <ReactPlayer
              className="related-video-player"
              url={LeoneVid }
              width="150px"
              height="100px"
              controls
            />
            <p>Video 4</p>
          </div>
          <div className="related-video">
          <ReactPlayer
              className="related-video-player"
              url={videoSrc}
              width="150px"
              height="100px"
              controls
            />
            <p>Video 5</p>
          </div>
          <div className="related-video">
          <ReactPlayer
              className="related-video-player"
              url={LeoneVid }
              width="150px"
              height="100px"
              controls
            />
            <p>Video 6</p>
          </div>
          <div className="related-video">
          <ReactPlayer
              className="related-video-player"
              url={videoSrc}
              width="150px"
              height="100px"
              controls
            />
            <p>Video 7</p>
          </div>
        </div>
      </div>

      <div className="progress-bar">
        {/* Barra de progresso para mostrar a porcentagem de conclusão do curso */}
        <div className="progress" style={{ width: `${completionPercentage}%` }}>
          {completionPercentage.toFixed(2)}% Concluído
        </div>
      </div>

      <div className="comments-section">
        {/* Seção de Comentários */}
        <h2 style={{color: 'purple'}}>Comentários</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Adicione um comentário"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className="comment-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
