import React, { useState } from 'react';
import './Upload.css';
import db from '../../database/db.json';
import axios from 'axios';

function Upload() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const validateUrl = (url) => {
    // Regex para validar URL de vídeo do YouTube
    const youtubeUrlPattern = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    return youtubeUrlPattern.test(url);
  };

  const handleEnviar = async () => {
    // Validar campos
    const isValidTitulo = titulo.trim() !== '';
    const isValidDescricao = descricao.trim() !== '';
    const isValidVideoUrl = validateUrl(videoUrl);

    if (isValidTitulo && isValidDescricao && isValidVideoUrl) {
      const novaAula = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        title: titulo,
        description: descricao,
        url: videoUrl
      };

      try {
        // Enviar os dados para o servidor utilizando axios
        const response = await axios.post('http://localhost:3001/Videcad', novaAula);

        if (response.status === 201) {
          console.log('Nova aula cadastrada:', novaAula);
          setTitulo('');
          setDescricao('');
          setVideoUrl('');
          setError('');
        } else {
          throw new Error('Erro ao cadastrar aula.');
        }
      } catch (error) {
        console.error('Erro ao cadastrar aula:', error);
        setError('Erro ao cadastrar aula. Por favor, tente novamente.');
      }
    } else {
      setError('Por favor, preencha todos os campos corretamente.');
    }
  };

  const handleLimpar = () => {
    setTitulo('');
    setDescricao('');
    setVideoUrl('');
    setError('');
  };

  return (
    <div className="containnner">
      <h1>Cadastrar Aula</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Descrição:</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </div>
      <div>
        <label>URL do vídeo (YouTube):</label>
        <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
      </div>
      <div>
        <button onClick={handleEnviar}>Enviar</button>
        <button onClick={handleLimpar}>Limpar</button>
      </div>
    </div>
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