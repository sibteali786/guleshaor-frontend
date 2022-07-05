import './App.scss';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FAQ from './Pages/FAQ/FAQ';
import Referrals from './Pages/Referrals/Referrals';
import Services from './Pages/Services/Services';
import InstructorProfile from './Pages/InstructorProfile/InstructorProfile';
import UserProfile from './Pages/UserProfile/UserProfile';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/referral" element={<Referrals />} />
      <Route path="/service" element={<Services />} />
      <Route path="/profile" element={<InstructorProfile />} />
      <Route path="/profileUser" element={<UserProfile />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
