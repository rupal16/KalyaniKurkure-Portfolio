import './App.css';
import Footer from './common/Footer';
import Header from './common/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certificates />} />
        </Routes>
        <hr className='break-line' />
        <Footer/>
        
      </div>
  );
}

export default App;
