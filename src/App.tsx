
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-[100dvh] bg-surface">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
