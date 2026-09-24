import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/HeroSection';
import MainSection from './components/main/MainSection';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}
