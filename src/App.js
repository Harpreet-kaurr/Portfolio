import './App.css';
import  Navbar  from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Hireme from './components/Hireme';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Hireme />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
