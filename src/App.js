import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Navbar from './Pages/Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Appointments from './Pages/Appointments/Appointments';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointments" element={<Appointments />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </main>
  );
}

export default App;
