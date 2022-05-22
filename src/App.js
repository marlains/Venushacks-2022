import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Acessories from './pages/acessories';
import Clothes from './pages/clothes';
import Art from './pages/art';
import HomeGoods from './pages/homeGoods';
import Party from './pages/party';
import Cooking from './pages/cooking';
import Footer from './components/Footer/Footer';


function App() {
  console.log ("hello world")
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/clothes" element={<Clothes />}/>
        <Route path="/art" element={<Art />}/>
        <Route path="/acessories" element={<Acessories />}/>
        <Route path="/homegoods" element={<HomeGoods />}/>
        <Route path="/party" element={<Party />}/>
        <Route path="/cooking" element={<Cooking />}/>
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
