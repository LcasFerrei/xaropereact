import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProf() {
  const [user, setUser] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
  }, []);

  useEffect(() => {
    if (user && user.userType === 'Professor') {
      axios.get(`http://localhost:3001/usuarios/${user.id}?timestamp=${Date.now()}`)
        .then(response => {
          setCursos(response.data.meusCursos);
        })
        .catch(error => {
          console.error('Erro ao obter cursos do usuário:', error);
        });
    }
  }, [user]);

  const handleEdit = (index) => {
    // Implementar lógica de edição aqui
    console.log(`Editar curso de índice ${index}`);
  };

  const handleDelete = (index) => {
    // Implementar lógica de exclusão aqui
    console.log(`Excluir curso de índice ${index}`);
  };

  const handlePost = (curso, index) => {
    // Gerar um ID único para o curso
    const id = generateUniqueId();

    const cursoParaEnviar = {
      id: id,
      titulo: curso.type,
      descricao: curso.description,
      link: curso.url,
      imagem: curso.image, // Utilizando a URL da imagem fornecida pelo usuário
    };

    // Enviar para o endpoint Xaropecursos
    axios.post('http://localhost:3001/Xaropecursos', cursoParaEnviar)
      .then(response => {
        console.log('Curso postado com sucesso em Xaropecursos:', response.data);
      })
      .catch(error => {
        console.error('Erro ao postar o curso em Xaropecursos:', error);
      });

    // Enviar para o endpoint cursos
    const cursoParaCursos = {
      id: id,
      title: curso.title,
      url: curso.url,
      videosRelacionados: curso.videosRelacionados,
    };

    axios.post('http://localhost:3001/cursos', cursoParaCursos)
      .then(response => {
        console.log('Curso enviado para cursos com sucesso:', response.data);
        // Atualizar o estado do curso para exibir "Publicado"
        setCursos(prevCursos => {
          const updatedCursos = [...prevCursos];
          updatedCursos[index].publicado = true; // Adicionando uma propriedade publicado ao curso
          return updatedCursos;
        });
      })
      .catch(error => {
        console.error('Erro ao enviar o curso para cursos:', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
    const reader = new FileReader();

    reader.onload = function(event) {
      const imageUrl = event.target.result; // URL da imagem convertida em base64
      setCursos(prevCursos => {
        const updatedCursos = [...prevCursos];
        updatedCursos[index].image = imageUrl;
        return updatedCursos;
      });
    };

    reader.readAsDataURL(file); // Converte o arquivo para base64
  };

  const filteredCursos = cursos.filter(curso =>
    curso.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para gerar IDs únicos
  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Área do Genius</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Pesquisar cursos..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>
      <div style={styles.coursesContainer}>
        {filteredCursos.map((curso, index) => (
          <div style={styles.course} key={index}>
            <h2 style={styles.courseTitle}>{curso.title}</h2>
            <p><strong>Tipo de Curso:</strong> {curso.type}</p>
            <p><strong>Descrição:</strong> {curso.description}</p>
            <p><strong>URL do Curso:</strong> <a href={curso.url} target="_blank" rel="noopener noreferrer">{curso.url}</a></p>
            {curso.image && <img src={curso.image} alt="Imagem do curso" style={styles.courseImage} />}
            <h3>Vídeos Relacionados</h3>
            {curso.videosRelacionados.map((video, idx) => (
              <div style={styles.relatedVideo} key={idx}>
                <h4>{video.title}</h4>
                <p><strong>Descrição:</strong> {video.description}</p>
                <p><strong>URL do Vídeo:</strong> <a href={video.url} target="_blank" rel="noopener noreferrer">{video.url}</a></p>
              </div>
            ))}
            <div style={styles.buttonContainer}>
              <button style={styles.editButton} onClick={() => handleEdit(index)}>Editar</button>
              <button style={styles.deleteButton} onClick={() => handleDelete(index)}>Excluir</button>
              {curso.publicado ? <p style={{ color: 'rgb(98, 98, 204)' }}>Publicado</p> : <button style={styles.postButton} onClick={() => handlePost(curso, index)}>Postar</button>}
              <label htmlFor={`imageUpload-${index}`} style={styles.imageButton}>Adicionar Imagem</label>
              <input type="file" id={`imageUpload-${index}`} style={{ display: 'none' }} onChange={(event) => handleImageUpload(index, event)} accept="image/*" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  searchContainer: {
    marginBottom: '20px',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  coursesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  course: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
    position: 'relative', // Para a posição absoluta da imagem
  },
  courseTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  relatedVideo: {
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  editButton: {
    backgroundColor: 'yellow',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  postButton: {
    backgroundColor: 'rgb(98, 98, 204)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  imageButton: {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'inline-block',
  },
  courseImage: {
    width: '100%',
    borderRadius: '8px',
    marginTop: '10px',
  },
};

export default UserProf;
