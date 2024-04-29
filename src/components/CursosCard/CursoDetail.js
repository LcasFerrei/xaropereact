import React, { useState, useEffect } from 'react';
import { useParams, Link  } from 'react-router-dom';
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

      <div className="related-videos" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2 style={{ color: 'purple', fontSize: '24px', marginBottom: '10px' }}>Módulos</h2>
        <div className="related-videos-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {relatedVideos.map((video, index) => (
            <div key={index} className="related-video" style={{ marginRight: '20px', marginBottom: '20px' }}>
              <ReactPlayer
                className="related-video-player"
                url={video.url}
                width="300px"
                height="180px"
                controls
              />
              <h3 style={{ fontSize: '16px', marginTop: '10px', marginBottom: '5px' }}>{video.title}</h3>
              <Link to={`/video/${video.id}`}>{video.title}</Link> {/* Use o componente Link */}
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
