//import AppRoutes from './routes';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Faq from './pages/FAQ/Faq';
import Login from "./components/Usuario/Usuario";


function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/FAQ" element={<Faq />}></Route>
        <Route path="/Login" element={<Login />}></Route>
    </Routes>
</BrowserRouter>
   
  )
}

export default App;

