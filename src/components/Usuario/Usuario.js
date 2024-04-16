import React, { useState } from 'react';


function UsuarioLogin() {
  const [isLogin, setIsLogin] = useState(true); 
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [error, setError] = useState(''); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignup = () => {
    const isValidEmail = validateEmail(email);
    const isValidName = name.trim() !== '';
    const isValidPassword = password.trim() !== '';

    // Define o estado de validEmail com base na validade do email
    setValidEmail(isValidEmail);

    // Se todos os campos estiverem preenchidos corretamente
    if (isValidEmail && isValidName && isValidPassword) {
      // Exibe a mensagem de sucesso
      setShowSuccessMessage(true);

      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Senha:', password);
      // Limpa os campos do formulário
      setTimeout(() => {
        setShowSuccessMessage(false);
        setEmail('');
        setPassword('');
        setName('');
        // Redireciona para a página inicial
        window.location.href = '/';
      }, 5000); 
    } else {
      // Se algum campo estiver vazio ou o email for inválido
      if (!isValidName) {
        setError('Por favor, insira seu nome.');
      } else if (!isValidEmail) {
        setError('Por favor, insira um e-mail válido.');
      } else if (!isValidPassword) {
        setError('Por favor, insira sua senha.');
      }
      // Limpa os campos do formulário
      setEmail('');
      setPassword('');
      setName('');

      // Oculta a mensagem de erro após 5 segundos
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    window.location.href = '/';
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  return (
    <div className={`container ${isLogin ? '' : 'active'}`} id="container">
      {/* Formulário de inscrição */}
      <div className="form-container sign-up">
        <form>
          <h1 style={{ color: 'black'}}>Inscrever-se</h1>
          {/* Mensagem de sucesso após a inscrição */}
          {showSuccessMessage && validEmail && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>}
          {/* Mensagem de erro */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {/* Ícones de redes sociais para login rápido */}
          
          <span>ou use seu e-mail para cadastro</span>
          {/* Campo de nome */}
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          {/* Campo de email */}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {/* Campo de senha */}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* Botão de inscrição */}
          <button type="button" onClick={handleSignup}>Inscrever-se</button>
        </form>
      </div>
      {/* Formulário de login */}
      <div className="form-container sign-in">
        <form>
          <h1 style={{ color: 'black'}}>Entrar</h1>
          
          <span>ou use sua senha de e-mail</span>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
          <button type="button" onClick={handleLogin}>Entrar</button>
          

          <a href="#">Esqueceu sua senha?</a>

        </form>
      </div>
      {/* Alternador de formulário (entre login e inscrição) */}
      <div className="toggle-container">
        <div className="toggle">
          {/* Painel para alternar para o formulário de login */}
          <div className="toggle-panel toggle-left">
            <h1 style={{ color: 'white'}}>Bem vindo de volta!</h1>
            <p style={{ color: 'white'}}>Insira seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Conta já cadastrada?</button>
          </div>
          {/* Painel para alternar para o formulário de inscrição */}
          <div className="toggle-panel toggle-right">
            <h1 style={{ color: 'white'}}>Olá, Genius!</h1>
            <p style={{ color: 'white'}}>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Inscrever-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioLogin;