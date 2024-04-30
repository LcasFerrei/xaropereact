import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';

function Upload() {
  const [cursoData, setCursoData] = useState({
    title: '',
    url: '',
    description: '',
    videosRelacionados: [{ title: '', url: '', description: '' }]
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newVideosRelacionados = [...cursoData.videosRelacionados];
    newVideosRelacionados[index] = { ...newVideosRelacionados[index], [name]: value };
    setCursoData({ ...cursoData, videosRelacionados: newVideosRelacionados });
  };

  const addVideoRelacionado = () => {
    setCursoData({
      ...cursoData,
      videosRelacionados: [...cursoData.videosRelacionados, { title: '', url: '', description: '' }]
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCurso = {
      title: cursoData.title,
      url: cursoData.url,
      description: cursoData.description,
      videosRelacionados: cursoData.videosRelacionados
    };

    axios.post('http://localhost:3001/Videcad', novoCurso)
      .then(response => {
        setSuccessMessage('Curso adicionado com sucesso!');
        setErrorMessage('');
        setCursoData({ // Limpa os campos do formulário
          title: '',
          url: '',
          description: '',
          videosRelacionados: [{ title: '', url: '', description: '' }]
        });
        console.log('Curso adicionado com sucesso:', response.data);
      })
      .catch(error => {
        setErrorMessage('Erro ao adicionar o curso. Por favor, tente novamente.');
        setSuccessMessage('');
        console.error('Erro ao adicionar o curso:', error);
      });
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <label htmlFor="title">Título do Curso:</label><br />
        <input
          type="text"
          id="title"
          name="title"
          value={cursoData.title}
          onChange={(e) => setCursoData({ ...cursoData, title: e.target.value })}
          required
        /><br />
      </div>
      <div>
        <label htmlFor="url">URL do Curso:</label><br />
        <input
          type="text"
          id="url"
          name="url"
          value={cursoData.url}
          onChange={(e) => setCursoData({ ...cursoData, url: e.target.value })}
          required
        /><br />
      </div>
      <div>
        <label htmlFor="description">Descrição do Curso:</label><br />
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          value={cursoData.description}
          onChange={(e) => setCursoData({ ...cursoData, description: e.target.value })}
          required
        ></textarea><br />
      </div>
      <div>
        {cursoData.videosRelacionados.map((video, index) => (
          <div key={index}>
            <h2>Vídeo Relacionado {index + 1}</h2>
            <label htmlFor={`tituloVideo${index}`}>Título do Vídeo:</label><br />
            <input
              type="text"
              id={`tituloVideo${index}`}
              name="title"
              value={video.title}
              onChange={(e) => handleChange(e, index)}
              required
            /><br />
            <label htmlFor={`urlVideo${index}`}>URL do Vídeo:</label><br />
            <input
              type="text"
              id={`urlVideo${index}`}
              name="url"
              value={video.url}
              onChange={(e) => handleChange(e, index)}
              required
            /><br />
            <label htmlFor={`descricaoVideo${index}`}>Descrição do Vídeo:</label><br />
            <textarea
              id={`descricaoVideo${index}`}
              name="description"
              rows="4"
              cols="50"
              value={video.description}
              onChange={(e) => handleChange(e, index)}
              required
            ></textarea><br />
            <hr />
          </div>
        ))}
      </div>
      <button type="button" onClick={addVideoRelacionado}>Adicionar um novo vídeo relacionado</button><br /><br />
      <button type="submit">Enviar Curso</button>
    </form>
  );
}

export default Upload;


















/*const Upload = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleEnviar = async () => {
    // Validar os campos
    const isValidTitulo = titulo.trim() !== '';
    const isValidDescricao = descricao.trim() !== '';
    const isValidVideoUrl = videoUrl.trim() !== '';

    if (isValidTitulo && isValidDescricao && isValidVideoUrl) {
      const novaAula = {
        id: generateId(),
        title: titulo,
        url: videoUrl,
        description: descricao
      };

      try {
        const response = await fetch('http://localhost:3001/Videcad', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novaAula)
        });

        if (response.ok) {
          console.log('Nova aula cadastrada:', novaAula);
          setTitulo('');
          setDescricao('');
          setVideoUrl('');
        } else {
          throw new Error('Erro ao cadastrar aula.');
        }
      } catch (error) {
        console.error('Erro ao cadastrar aula:', error);
        setError('Erro ao cadastrar aula. Por favor, tente novamente.');
      }
    } else {
      setError('Por favor, preencha todos os campos.');
    }
  };

  const handleCancelar = () => {
    setTitulo('');
    setDescricao('');
    setVideoUrl('');
    setError('');
  };

  return (
    <div className="upload-container">
      <h2>Cadastrar Aula</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="input-group">
        <label htmlFor="titulo">Título:</label>
        <input id="titulo" type="text" value={titulo} onChange={handleTituloChange} />
      </div>
      <div className="input-group">
        <label htmlFor="descricao">Descrição:</label>
        <textarea id="descricao" value={descricao} onChange={handleDescricaoChange} />
      </div>
      <div className="input-group">
        <label htmlFor="videoUrl">Vídeo URL:</label>
        <input id="videoUrl" type="text" value={videoUrl} onChange={handleVideoUrlChange} />
      </div>
      <div className="button-group">
        <button type="button" onClick={handleEnviar}>Enviar</button>
        <button type="button" onClick={handleCancelar} className="cancel-button">Cancelar</button>
      </div>
    </div>
  );
};

export default Upload;*/