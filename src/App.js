import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Navbar from './Pages/Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Appointments from './Pages/Appointments/Appointments';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/Functions/RequireAuth';
import ForgorPassword from './Pages/Login/ForgorPassword';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointments"
          element={
            <RequireAuth>
              <Appointments />
            </RequireAuth>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgorPassword />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </main>
  );
}

export default App;
