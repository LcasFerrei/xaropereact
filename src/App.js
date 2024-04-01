//import AppRoutes from './routes';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Faq from './pages/FAQ/Faq';
import Professores from './pages/Professores/Professores';
import Login from "./components/Usuario/Usuario";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReviewsPage from "./pages/Revie/reviews";
import Playvideo from "./pages/Videopages/videohtml";


function App(){
  return(
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FAQ" element={<Faq />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Professores" element={<Professores />}></Route>
        <Route path="/Reviews" element={<ReviewsPage/>}></Route>
        <Route path="/Videopages" element={<Playvideo/>}></Route>
    </Routes>
    <Footer />
</BrowserRouter>
   
  )
}

export default App;