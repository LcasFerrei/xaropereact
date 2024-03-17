import '../../Style/login.css'; // Importa o arquivo index CSS
import '../../Header/Header.css';



import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Login from '../../components/Usuario/Usuario';




function Login() {
  return (
    
      <div>
          {/* Componentes */}
          <Header />
          <Login />
          <Footer />
      </div>
    
  );
}

export default Login;

