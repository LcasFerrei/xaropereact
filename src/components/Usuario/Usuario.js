import React, { useState } from 'react';
import axios from 'axios';
import db from '../../database/db.json'; // Importe o banco de dados simulado

function UsuarioLogin() {
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('Aluno');
  const [validEmail, setValidEmail] = useState(true);
  const [error, setError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState(null);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  const handleSignup = async () => {
    const isValidEmail = validateEmail(email);
    const isValidName = name.trim() !== '';
    const isValidPassword = password.trim() !== '';

    setValidEmail(isValidEmail);
    
    if (isValidEmail && isValidName && isValidPassword) {
      const newUser = { nome: name, email: email, senha: password, userType: userType };
      
      // Adiciona a propriedade cursosInscritos como um array vazio apenas se o tipo de usuário for "Aluno"
      if (userType === 'Aluno') {
        newUser.cursosInscritos = [];
      }

      if (userType == 'Professor'){
        newUser.meusCursos = [];
      }
      
      try {
        const response = await fetch('http://localhost:3001/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          console.log('Novo usuário cadastrado:', newUser);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
            setEmail('');
            setPassword('');
            setName('');
            setUserType('Aluno');
            window.location.href = '/';
          }, 5000);
        } else {
          throw new Error('Erro ao cadastrar usuário.');
        }
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        setError('Erro ao cadastrar usuário.');
        setTimeout(() => {
          setError('');
        }, 5000);
      }
    } else {
      if (!isValidName) {
        setError('Por favor, insira seu nome.');
      } else if (!isValidEmail) {
        setError('Por favor, insira um e-mail válido.');
      } else if (!isValidPassword) {
        setError('Por favor, insira sua senha.');
      }

      setEmail('');
      setPassword('');
      setName('');
      
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const handleLogin = () => {
    // Encontra o usuário correspondente ao email fornecido durante o login
    axios.get(`http://localhost:3001/usuarios?email=${email}`).then( (res) => {
      const loggedInUser = res.data[0];
      console.log(loggedInUser);

      if (loggedInUser) {
        if (loggedInUser.senha === password) {
          // Define o usuário com base nos dados encontrados
          /*const user = {
            nome: loggedInUser.nome,
            userType: loggedInUser.userType
          };*/
          localStorage.setItem("user", JSON.stringify(loggedInUser));
          setUser(user);
          window.location.href = '/'; // Redireciona para a página inicial após o login
        } else {
          setLoginError('Email ou senha incorretos.');
          setTimeout(() => {
            setLoginError('');
          }, 5000);
        }
      } else {
        setLoginError('Email não cadastrado.');
        setTimeout(() => {
          setLoginError('');
        }, 5000);
      }
    }); //db.usuarios.find((user) => user.email === email);
  
    
  };
  

  return (
    <div className={`container ${isLogin ? '' : 'active'}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1 style={{ color: 'black' }}>Inscrever-se</h1>
          {showSuccessMessage && validEmail && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <span>Selecione o tipo de usuário:</span>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="Aluno">Aluno(a)</option>
            <option value="Professor">Professor(a)</option>
          </select>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleSignup}>Inscrever-se</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 style={{ color: 'black' }}>Entrar</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={handleLogin}>Entrar</button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <a href="#">Esqueceu sua senha?</a>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 style={{ color: 'white' }}>Bem vindo de volta!</h1>
            <p style={{ color: 'white' }}>Insira seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Conta já cadastrada?</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 style={{ color: 'white' }}>Olá, Genius!</h1>
            <p style={{ color: 'white' }}>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Inscrever-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioLogin;
