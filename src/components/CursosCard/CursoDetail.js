import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import cursos from '../../database/cursos';

function CursoDetail() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [videosWatched, setVideosWatched] = useState(0);
  const [courseTitle, setCourseTitle] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  useEffect(() => {
    const { title, url, description } = cursos[id] || { title: 'Curso a ser implementado', videoPath: '', description: '' };
    setCourseTitle(title);
    setVideoURL(url);
    setVideoDescription(description);
  }, [id]);

  const totalVideos = 10; // Número total de vídeos no curso

  const handleCommentSubmit = (e) => { // Função para lidar com o envio de comentários
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (commentText.trim() !== '') { // Verifica se o texto do comentário não está vazio
      setComments([...comments, commentText]); // Adiciona o novo comentário ao estado de comentários
      setCommentText(''); // Limpa o campo de texto do comentário
    }
  };

  const handleVideoWatched = () => { // Função para lidar com a marcação de um vídeo como assistido
    setVideosWatched(videosWatched + 1); // Incrementa o contador de vídeos assistidos
  };

  const completionPercentage = (videosWatched / totalVideos) * 100; // Calcula a porcentagem de conclusão do curso

  return (
    <div className="video-page">
      <h1 className="video-title">{courseTitle}</h1> {/* Exibe o título do curso */}

      <div className="video-container">
        {/* Video principal */}
        <div className="video-wrapper">
          <ReactPlayer
            className="react-player"
            url={videoURL}
            width="100%"
            height="100%"
            controls
            onEnded={handleVideoWatched} // Chama a função quando o vídeo termina
          />
        </div>
        <div className="video-details">
          {/* Descrição do vídeo */}
          <p className="video-description">
            {videoDescription}
          </p>
        </div>
      </div>

      <div className="related-videos">
        {/* Vídeos relacionados */}
        <h2 style={{color: 'purple'}}>Vídeos Relacionados</h2>
        <div className="related-videos-list">
          {/* Lista de vídeos relacionados */}
          {/* Cada vídeo é representado por um componente ReactPlayer dentro de um Link */}
          {/* O Link redireciona para a página do respectivo vídeo */}
          {/* O título do vídeo é exibido abaixo do componente ReactPlayer */}
          {/* Adicione mais vídeos relacionados conforme necessário */}
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
        {/* Formulário para adicionar comentários */}
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Adicione um comentário"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        {/* Lista de comentários */}
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
}

export default CursoDetail;
