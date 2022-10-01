import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Navbar from './Pages/Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Appointments from './Pages/Appointments/Appointments';
import Login from './Pages/Login/Login';
import Footer from './Pages/Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="login" element={<Login />} />
      </Routes>
      {/*<Footer />*/}
    </div>
  );
}

export default App;
