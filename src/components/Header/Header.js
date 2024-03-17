import { LuUser2 } from "react-icons/lu";
import { GiRemedy } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <a href="index.html" className="inicial">
        <Link to="/">
        <i className='bx bxs-capsule'><GiRemedy />XaropeGenius</i>
        </Link>
      </a>

      <ul className="navegação">
        <a href="login.html">Inscreva-se</a>
        <a href="./review.html">Reviews</a>
        <a href="Professores.html">Professores</a>
        <a href="/Faq">Dúvidas Frequentes</a>
        
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
