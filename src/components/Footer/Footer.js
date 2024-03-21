import '../Footer/Footer.css'

function Footer(){
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <a href="index.html" className="ftlogo"><i className='bx bxs-videos'></i>Assista</a>
          </div>
          <div className="footer-info">
            <div className="contact-info">
              <h3>Entre em Contato</h3>
              <p><i className="bx bx-map"></i>Endereço: Rua do HTML com CSS, 123</p>
              <p><i className="bx bx-phone"></i>Contato: +55 85 9481515418</p>
              <p><i className="bx bx-envelope"></i>Email: suporte@XaropesGroup.com</p>
            </div>
            <div className="social-links">
              <h3>Siga-nos</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="social-icon"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="social-icon"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="social-icon"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>&copy; 2024 XaropesGroup. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;