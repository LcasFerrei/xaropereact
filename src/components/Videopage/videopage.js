import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './videopage.css'; // Arquivo CSS para estilização

const VideoPage = () => {
  // Estado para armazenar o comentário
  const [comment, setComment] = useState('');
  // Estado para armazenar os comentários enviados
  const [submittedComments, setSubmittedComments] = useState([]);

  // Dados de exemplo para o vídeo e comentários
  const videoData = {
    title: "Introdução ao HTML",
    videoId: "5_SH8GQwmAE",
    relatedLessons: [
      { title: "HTML Avançado", videoId: "K7xKKEucVes" },
      { title: "CSS Básico", videoId: "r-hymEG55Vs" },
      { title: "JavaScript Iniciante", videoId: "xaRguw-1IK8" }
    ]
  };

  // Função para lidar com a submissão de comentários
  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Adiciona o comentário ao estado de comentários enviados
    setSubmittedComments([...submittedComments, comment]);
    // Limpa o campo de comentário
    setComment('');
  };

  // Função para obter a URL da miniatura de um vídeo do YouTube
  const getVideoThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/default.jpg`;
  };

  return (
    <div className="video-page">
      <div className="video-container">
        <h2>{videoData.title}</h2>
        {/* Incorporando o vídeo do YouTube com ReactPlayer */}
        <div className="video-player">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${videoData.videoId}`} controls={true} />
        </div>
        <div className="related-lessons">
          <h3>Aulas Relacionadas:</h3>
          <ul>
            {videoData.relatedLessons.map((lesson, index) => (
              <li key={index}>
                <a href={`https://www.youtube.com/watch?v=${lesson.videoId}`} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={getVideoThumbnailUrl(lesson.videoId)} 
                    alt={lesson.title} 
                    style={{ width: '150px', height: '100px', border: '2px solid #ccc', marginBottom: '10px' }} 
                  />
                  <p>{lesson.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="comments-section">
        <h3>Comentários dos Alunos</h3>
        {/* Formulário para adicionar comentários */}
        <form onSubmit={handleSubmitComment}>
          <textarea 
            placeholder="Adicione seu comentário"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        {/* Aqui você pode listar os comentários enviados */}
        <div className="comments-list">
          {submittedComments.map((comment, index) => (
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
