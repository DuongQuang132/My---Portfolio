import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <main className='main-content'>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        </main>
    </div>
  );
}

export default App;