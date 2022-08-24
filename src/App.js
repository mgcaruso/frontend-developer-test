import './styles/index.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Footer from './components/footer'
import ContentCategory from './components/ContentCategory'
import ContentDetails from './components/ContentDetails'
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function App() {
  const loggedUser = useSelector( store => store.usersReducer.loggedUser)
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {loggedUser && <Route exact path='/:category' element={<ContentCategory />} />}
        {loggedUser && <Route exact path='/:category/:videoId' element={<ContentDetails />} />}
        {!loggedUser ? <Route exact path='/login' element={<LogIn />} /> : <Route exact path='/login' element={<Home />} />  }
      </Routes>
      <Footer/>
      <Toaster />
    </>
  );
}

export default App;
