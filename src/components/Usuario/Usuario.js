import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`container ${isLogin ? '' : 'active'}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Inscrever-se</h1>
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
          <button>Inscrever-se</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Entrar</h1>
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
            <h1>Bem vindo de volta!</h1>
            <p>Insira seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Conta já cadastrada?</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Olá amigo!</h1>
            <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
            <button className="hidden" onClick={toggleForm}>Inscrever-se</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
