import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../Videopage/videopage.css';
import videoSrc from '../Videopage/teste.mp4';
import LeoneVid from '../Videopage/leoneaula.mp4';
import RelVid from '../Videopage/Projeto de Relogio Digital com Html, CSS e Javascript em menos de 20 minutos - XaropesGenius.mp4';

function CursoDetail() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [videosWatched, setVideosWatched] = useState(0);
  const [courseTitle, setCourseTitle] = useState('');
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    let title = '';
    let url = '';
    if (id === '1') {
      title = 'Primeiros Passos no HTML';
      url = RelVid;
    } else if (id === '2') {
      title = 'JavaScript do inicio ao avançado';
      url = LeoneVid;
    } else if (id === '3') {
      title = 'O que é e como usar o CSS?';
      url = videoSrc;
    } else if (id === '4') {
      title = 'O que é React?';
      url = RelVid;
    } else if (id === '5') {
      title = 'O que é Banco de Dados';
      url = LeoneVid;
    } else if (id === '6') {
      title = 'Diferença entre Git e GitHub';
      url = videoSrc;
    } else if (id === '7') {
      title = 'Python do inicio ao avançado';
      url = RelVid;
    } else if (id === '8') {
      title = 'Introdução a Php, linguagem ainda está viva no meio dev?';
      url = videoSrc;
    } else if (id === '9') {
      title = 'Introdução ao Laravel';
      url = LeoneVid;
    } else if (id === '10') {
      title = 'Bônus: Primeiros passos para montar um curriculo';
      url = RelVid;
    }  else {
      title = 'Curso a ser implementado';
      url = '';
    }
    setCourseTitle(title);
    setVideoURL(url);
  }, [id]);

  const totalVideos = 10;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  const handleVideoWatched = () => {
    setVideosWatched(videosWatched + 1);
  };

  const completionPercentage = (videosWatched / totalVideos) * 100;

  return (
    <div className="video-page">
      <h1 className="video-title">{courseTitle}</h1>
      
      <div className="video-container">
        {/* Video principal */}
        <div className="video-wrapper">
          <ReactPlayer
            className="react-player"
            url={videoURL}
            width="100%"
            height="100%"
            controls
            onEnded={handleVideoWatched}
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
            <Link to="/Cursos/1">
              <ReactPlayer
                className="related-video-player"
                url={videoSrc}
                width="150px"
                height="100px"
                controls
              />  
              <p>Video 1</p>
            </Link>
          </div>
          <div className="related-video">
            <ReactPlayer
              className="related-video-player"
              url={LeoneVid}
              width="150px"
              height="100px"
              controls
            />
            <p>Video 2</p>
          </div>
          <div className="related-video">
            <Link to="/Cursos/1">
              <ReactPlayer
                className="related-video-player"
                url={RelVid}
                width="150px"
                height="100px"
                controls
              />  
              <p>Video 1</p>
            </Link>
          </div>
          <div className="related-video">
            <ReactPlayer
              className="related-video-player"
              url={LeoneVid}
              width="150px"
              height="100px"
              controls
            />
            <p>Video 2</p>
          </div>
          <div className="related-video">
            <Link to="/Cursos/1">
              <ReactPlayer
                className="related-video-player"
                url={videoSrc}
                width="150px"
                height="100px"
                controls
              />  
              <p>Video 1</p>
            </Link>
          </div>
          <div className="related-video">
            <ReactPlayer
              className="related-video-player"
              url={RelVid}
              width="150px"
              height="100px"
              controls
            />
            <p>Video 2</p>
          </div>
          <div className="related-video">
            <Link to="/Cursos/1">
              <ReactPlayer
                className="related-video-player"
                url={videoSrc}
                width="150px"
                height="100px"
                controls
              />  
              <p>Video 1</p>
            </Link>
          </div>
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
}

export default CursoDetail;
