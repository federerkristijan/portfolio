import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Layout from './components/Layout';
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';
import Projects from './views/Projects';
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
