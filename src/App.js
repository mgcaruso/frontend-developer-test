import './styles/index.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
