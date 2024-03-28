import { GiRemedy } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <a href="index.html" className="inicial">
        <Link to="/">
        <i className='bx bxs-capsule'>XaropeGenius</i>
        </Link>
      </a>

      <ul className="navegação">
        <Link to="/" style={{textDecoration: 'none'}}>Inscreva-se</Link>
        <Link to="/Review" style={{textDecoration: 'none'}}>Reviews</Link>
        <Link to="/Professores" style={{textDecoration: 'none'}}>Professores</Link>
        <Link to="/Faq" style={{textDecoration: 'none'}}>Dúvidas Frequentes</Link>
        
      </ul>


      <div className="header-icons">
      <Link to="/login">
        <i className='bx bx-user bx-sm'></i>
      </Link>
      <div id="menu"><i className='bx bx-menu bx-sm'></i></div>
    </div>
    </header>
  );
}

export default Header;
