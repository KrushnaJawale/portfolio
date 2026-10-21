import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/HeroSection';
import MainSection from './components/main/MainSection';
import Footer from './components/footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProjectsPage from './components/pages/ProjectsPage';
import CertificatesPage from './components/pages/CertificatesPage';

function HomePage() {
  return (
    <>
      <Hero />
      <MainSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
