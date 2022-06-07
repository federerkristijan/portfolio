import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
// import Sidebar from './componenets/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
