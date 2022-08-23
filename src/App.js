import './styles/index.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import ContentCategory from './components/ContentCategory'
import ContentDetails from './components/ContentDetails'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/:category' element={<ContentCategory />} />
        <Route exact path='/:category/:videoId' element={<ContentDetails />} />
        <Route exact path='/login' element={<LogIn />} />
      </Routes>
        <Toaster />
    </>
  );
}

export default App;
