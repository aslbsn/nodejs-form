import { BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Register from './Register';
import Portal from './Portal'
import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import Sifre from "./component/Sifre";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/giris" element={<Login />} />
        <Route path="/kayit" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/portal/BasvuruFormu" element={<BasvuruFormu />} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule />} />
        <Route path="/sifre" element={<Sifre />} />
      </Routes>
    </Router>

  );
}

export default App;