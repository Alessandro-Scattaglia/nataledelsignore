import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Album from "./pages/Album";
import Attivita from "./pages/Attivita";
import CPP from "./pages/CPP";
import Calendario from "./pages/Calendario";
import Carita from "./pages/Carita";
import Catechismo from "./pages/Catechismo";
import Contatti from "./pages/Contatti";
import Giovani from "./pages/Giovani";
import Home from "./pages/Home";
import IPreti from "./pages/IPreti";
import LaChiesa from "./pages/LaChiesa";
import LaStoria from "./pages/LaStoria";
import Orari from "./pages/Orari";
import Oratorio from "./pages/Oratorio";

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
          <Route path="/album" element={<Album />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
