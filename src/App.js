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
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
