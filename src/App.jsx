import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="m-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
