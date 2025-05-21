import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import GuerraDoContestado from './pages/GuerraDoContestado';
import GuerraDeCanudos from './pages/GuerraDeCanudos';
import PrimeiraGuerraMundial from './pages/PrimeiraGuerraMundial';
import RevolucaoRussa from './pages/RevolucaoRussa';
import FascismoItaliano from './pages/FascismoItaliano';
import CriseDe1929 from './pages/CriseDe1929';
import Pagina9 from './pages/SobreNos';
import Curtidas from './pages/Curtidas';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guerra-do-contestado" element={<GuerraDoContestado />} />
        <Route path="/guerra-de-canudos" element={<GuerraDeCanudos />} />
        <Route path="/primeira-guerra-mundial" element={<PrimeiraGuerraMundial />} />
        <Route path="/revolucao-russa" element={<RevolucaoRussa />} />
        <Route path="/fascismo-italiano" element={<FascismoItaliano />} />
        <Route path="/crise-de-1929" element={<CriseDe1929 />} />
        <Route path="/sobre-nos" element={<Pagina9 />} />
        <Route path="/curtidas" element={<Curtidas />} />
      </Routes>
    </Router>
  );
}

export default App;