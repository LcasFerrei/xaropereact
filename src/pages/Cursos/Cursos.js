import "../Professores/Profs.css";
import Footer from "../../components/Footer/Footer";
import PaginaCursos from "../../components/CursosCard/CursosXaropes";


function CursosPage(){
    return(
        <div>

        <h1>TODAS AS NOSSAS CAPSULAS DE DOSE DIARIA DE PROGRAMAÇÃO</h1>
        < PaginaCursos />
        <Footer />
        </div>
        
    )
}

export default CursosPage;