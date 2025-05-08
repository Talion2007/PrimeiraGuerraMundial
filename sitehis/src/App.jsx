
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/guerra-do-contestado" element={<div>Guerra do Contestado</div>} />
        <Route path="/guerra-de-canudos" element={<div>Guerra de Canudos</div>} />
        <Route path="/primeira-guerra-mundial" element={<div>Primeira Guerra Mundial</div>} />
        <Route path="/revolucao-russa" element={<div>Revolução Russa</div>} />
        <Route path="/fascismo-italiano" element={<div>Fascismo Italiano</div>} />
        <Route path="/crise-de-1929" element={<div>Crise de 1929</div>} />
        <Route path="/pagina-7" element={<div>Página 7</div>} />
        <Route path="/pagina-8" element={<div>Página 8</div>} />
        <Route path="/pagina-9" element={<div>Página 9</div>} />
        <Route path="/curtidas" element={<div>Curtidas</div>} />
      </Routes>
    </Router>
  );
}

export default App;

