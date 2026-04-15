import { Navigate, Route, Routes } from "react-router-dom";
import "./pages/PageBase.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Attivita from "./pages/Attivita/Attivita";
import CPP from "./pages/CPP/CPP";
import Calendario from "./pages/Calendario/Calendario";
import Carita from "./pages/Carita/Carita";
import Catechismo from "./pages/Catechismo/Catechismo";
import Contatti from "./pages/Contatti/Contatti";
import Giovani from "./pages/Giovani/Giovani";
import Home from "./pages/Home/Home";
import IPreti from "./pages/IPreti/IPreti";
import LaChiesa from "./pages/LaChiesa/LaChiesa";
import LaStoria from "./pages/LaStoria/LaStoria";
import Orari from "./pages/Orari/Orari";
import Oratorio from "./pages/Oratorio/Oratorio";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Navbar />
      <ScrollToTop />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/orari" element={<Orari />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/carita" element={<Carita />} />
          <Route path="/attivita" element={<Attivita />} />
          <Route path="/oratorio" element={<Oratorio />} />
          <Route path="/catechismo" element={<Catechismo />} />
          <Route path="/giovani" element={<Giovani />} />
          <Route path="/la-chiesa" element={<LaChiesa />} />
          <Route path="/la-storia" element={<LaStoria />} />
          <Route path="/i-preti" element={<IPreti />} />
          <Route path="/cpp" element={<CPP />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
