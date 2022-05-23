import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Sidebar from './componenets/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
