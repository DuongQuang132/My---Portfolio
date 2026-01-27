import React from 'react';
import { navLinks } from '../../Data';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;