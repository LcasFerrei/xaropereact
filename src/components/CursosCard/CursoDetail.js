import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import db from '../../database/db.json';

function CursoDetail() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [videosWatched, setVideosWatched] = useState(0);
  const [courseTitle, setCourseTitle] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const curso = db.cursos.find(curso => curso.id === id);
    if (curso) {
      const { title, url, description, videosRelacionados } = curso;
      setCourseTitle(title || 'Curso a ser implementado');
      setVideoURL(url || '');
      setVideoDescription(description || '');
      setRelatedVideos(videosRelacionados || []);
    }
  }, [id]);

  const totalVideos = 10; // Número total de vídeos no curso

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
          <p className="video-description">
            {videoDescription}
          </p>
        </div>
      </div>

      <div className="related-videos">
        <h2 style={{ color: 'purple' }}>Vídeos Relacionados</h2>
        <div className="related-videos-list">
          {relatedVideos.map((video, index) => (
            <div key={index} className="related-video">
              <ReactPlayer
                className="react-player"
                url={video.url}
                width="100%"
                height="100%"
                controls
              />
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${completionPercentage}%` }}>
          {completionPercentage.toFixed(2)}% Concluído
        </div>
      </div>

      <div className="comments-section">
        <h2 style={{ color: 'purple' }}>Comentários</h2>
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
