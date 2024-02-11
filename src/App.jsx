import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';
import Events from './pages/Events';
import Register from './pages/Register';
import About from './pages/About';
import Gallery from './pages/Gallery';

const App = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <Router>
      <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        {/* <Route path='/register' element={<Register />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;