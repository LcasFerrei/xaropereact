import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Upload.css';

function Upload() {
  const [cursoData, setCursoData] = useState({
    title: '',
    url: '',
    description: '',
    type: '',
    videosRelacionados: [{ title: '', url: '', description: '' }]
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [image, setImage] = useState(null);
  const [outroCurso, setOutroCurso] = useState(false);
  const [novoTipoCurso, setNovoTipoCurso] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3001/usuarios/${user.id}?timestamp=${Date.now()}`)
        .then(response => {
          setCursos(response.data.meusCursos);
        })
        .catch(error => {
          console.error('Erro ao obter cursos do usuário:', error);
        });
    }
  }, [user]);

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

    if (!user) {
      setErrorMessage('Faça login para adicionar um curso.');
      return;
    }

    if (user.userType !== 'Professor') {
      setErrorMessage('Apenas professores podem adicionar cursos.');
      return;
    }

    const tipoCurso = outroCurso ? novoTipoCurso : cursoData.type;

    const novoCurso = {
      title: cursoData.title,
      url: cursoData.url,
      description: cursoData.description,
      type: tipoCurso,
      videosRelacionados: cursoData.videosRelacionados
    };

    const updatedUser = { ...user, meusCursos: [...cursos, novoCurso] };

    axios.put(`http://localhost:3001/usuarios/${user.id}`, updatedUser)
      .then(response => {
        setSuccessMessage('Curso adicionado com sucesso!');
        setErrorMessage('');
        setCursoData({
          title: '',
          url: '',
          description: '',
          type: '',
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

  const isValidYouTubeUrl = (url) => {
    const pattern = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
  };

  const handleURLChange = (event) => {
    const { value } = event.target;
    if (!isValidYouTubeUrl(value)) {
      setErrorMessage('Insira um link válido do YouTube.');
    } else {
      if (value.includes('watch?v=')) {
        setErrorMessage('Insira o link do vídeo no formato de embed.');
      } else {
        setErrorMessage('');
      }
    }
    setCursoData({ ...cursoData, url: value });
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <label htmlFor="type">Tipo de Curso:</label><br />
        <select
          id="type"
          name="type"
          value={cursoData.type}
          onChange={(e) => {
            setCursoData({ ...cursoData, type: e.target.value });
            setOutroCurso(e.target.value === 'Outro');
          }}
          required
        >
          <option value="">Selecione o tipo de curso</option>
          <option value="Html">HTML</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="React">React</option>
          <option value="Banco de Dados">Banco de Dados</option>
          <option value="Git and GitHub">Git and GitHub</option>
          <option value="Python">Python</option>
          <option value="PHP">PHP</option>
          <option value="Laravel">Laravel</option>
          <option value="Bônus">Bônus: Preparação para Entrevistas de Emprego</option>
          <option value="Outro">Outro</option>
        </select>
        {outroCurso && (
          <input
            type="text"
            placeholder="Digite o novo tipo de curso"
            value={novoTipoCurso}
            onChange={(e) => setNovoTipoCurso(e.target.value)}
            required
          />
        )}
      </div>
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
          onChange={handleURLChange}
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
