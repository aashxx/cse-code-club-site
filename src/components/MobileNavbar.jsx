import React from 'react';
import { AiOutlineBars} from 'react-icons/ai';

const MobileNavbar = ({openNav, setOpenNav}) => {
  return (
    <nav className='mobile-nav'>
        <div>
            <img src='/logo.jpeg' alt='Logo' />
        </div>
        <aside>
            <button onClick={() => setOpenNav(!openNav)}>
                <AiOutlineBars />
            </button>
        </aside>
    </nav>
  )
}

export default MobileNavbar;