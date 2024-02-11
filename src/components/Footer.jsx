import React from 'react';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='resume'>
        <img src="https://crescent.education/wp-content/themes/crescent/theme/images/logo.png" alt="BSACIST" />
        <div>
          <a href="https://linktr.ee/csecodingclub" target='blank'>Register</a>
          <a href="mailto:crescentcsecodingclub@gmail.com" target='blank'>Email</a>
        </div>
      </div>
      <div className='author'>
        <img src="/logo.jpeg" alt="Aashir" />
        <h2>CSE Coding Club</h2>
        <p>Department of Computer Science and Engineering</p>
      </div>
      <div className='social'>
        <h2>Social Media</h2>
        <article>
            <a href="https://instagram.com/crescentcsecodingclub" target='blank'>
                <AiFillInstagram />
            </a>
            <a href="https://linkedin.com/in/aashxx" target='blank'>
                <AiFillLinkedin />
            </a>
            <a href="https://github.com/aashxx" target='blank'>
                <AiFillGithub />
            </a>
        </article>
      </div>
    </footer>
  )
}

export default Footer;