import React, { useState } from 'react';
import Home from "../../pages/Home/Home";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = () => {
    // Mostrar a mensagem de sucesso ao clicar no botão
    setShowSuccessMessage(true);

    // Limpar a mensagem e redirecionar após alguns segundos
    setTimeout(() => {
      setShowSuccessMessage(false);
      // Redirecionamento para a página inicial
      window.location.href = '/'; // Redireciona para a página inicial
    }, 5000); // 5 segundos
  };

  return (
    <div className={`container ${isLogin ? '' : 'active'}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1 style={{ color: 'black'}}>Inscrever-se</h1>
          {showSuccessMessage && <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>} {/* Mensagem de sucesso */}
          <div className="social-icons">
            <button className="icon"><i className="fa-brands fa-google-plus-g"></i></button>
            <button className="icon"><i className="fa-brands fa-facebook-f"></i></button>
            <button className="icon"><i className="fa-brands fa-github"></i></button>
            <button className="icon"><i className="fa-brands fa-linkedin-in"></i></button>
          </div>
          <span>ou use seu e-mail para cadastro</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button" onClick={handleSignup}>Inscrever-se</button> {/* Alteração do tipo do botão para evitar o envio do formulário */}
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 style={{ color: 'black'}}>Entrar</h1>
          <div className="social-icons">
            <button className="icon"><i className="fa-brands fa-google-plus-g"></i></button>
            <button className="icon"><i className="fa-brands fa-facebook-f"></i></button>
            <button className="icon"><i className="fa-brands fa-github"></i></button>
            <button className="icon"><i className="fa-brands fa-linkedin-in"></i></button>
          </div>
          <span>ou use sua senha de e-mail</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Esqueceu sua senha?</a>
          <button>Entrar</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 style={{ color: 'white'}}>Bem vindo de volta!</h1>
            <p style={{ color: 'white'}}>Insira seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Conta já cadastrada?</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 style={{ color: 'white'}}>Olá amigo!</h1>
            <p style={{ color: 'white'}}>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Inscrever-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
