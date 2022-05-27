import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
