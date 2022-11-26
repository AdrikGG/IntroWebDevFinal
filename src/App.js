import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Work from './pages/Work';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <div>hello world</div>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
