import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quran from './pages/Quran';
import Prayer from './pages/Prayer';
import Ramadan from './pages/Ramadan';
import Zakat from './pages/Zakat';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/ramadan" element={<Ramadan />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
