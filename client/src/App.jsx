import { useEffect } from 'react';
import { initTheme } from './utils/theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import CurrentProjects from './components/CurrentProjects/CurrentProjects';
import Projects from './components/Projects/Projects';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CurrentProjects />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

