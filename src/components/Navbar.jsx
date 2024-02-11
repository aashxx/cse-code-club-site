import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = ({openNav, setOpenNav}) => {
  return (
    <nav className={`desktop-nav ${openNav ? 'open-Nav' : 'close-Nav'}`}>
      <div>
          <button onClick={() => setOpenNav(!openNav)}>
              <IoCloseSharp />
          </button>
      </div>
      <a href="/">
        <img src="/logo.jpeg" alt="CSE" />
      </a>
      <ul>
        <li>
          <Link to="/" onClick={() => setOpenNav(!openNav)}>Home</Link>
        </li>
        <li>
          <Link to="/events" onClick={() => setOpenNav(!openNav)}>Events</Link>
        </li>
        <li>
          <a href="https://linktr.ee/csecodingclub" onClick={() => setOpenNav(!openNav)} target='blank'>Register</a>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpenNav(!openNav)}>About</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setOpenNav(!openNav)}>Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;