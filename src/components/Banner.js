import BannerImage from '../Assets/Banner/Bannerteste.png'
import { GiRemedy } from "react-icons/gi";

function Banner() {
    return (
        <div className="banner">
            <h5>Descubra o XaropeGenius! <GiRemedy /></h5>
            <img src={BannerImage} alt="Banner XaropeGenius" />
            <p className="banne">Obtenha acesso ilimitado a cursos de programação de alta qualidade.</p>
            <a href="/login" className="btn">Inscreva-se Agora</a>
          
        </div>
    );
}

export default Banner;
