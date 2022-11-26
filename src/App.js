import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
