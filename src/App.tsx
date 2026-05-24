
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { ClinicGallery } from './components/sections/ClinicGallery';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { AIAssistantFloat } from './components/ui/AIAssistantFloat';

function App() {
  return (
    <div className="min-h-[100dvh] bg-surface overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        {/* Overlapping Sheet Pattern */}
        <div className="relative z-20 bg-surface rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] -mt-20 pb-10 overflow-hidden">
          <Stats />
          <About />
          <ClinicGallery />
          <Services />
          <Testimonials />
          <Contact />
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
      <AIAssistantFloat />
    </div>
  );
}

export default App;
