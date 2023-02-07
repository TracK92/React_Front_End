import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <ul className='navbar'>
          <li>
            <button onClick={() => navigate("/")}>
              Access Codes
            </button>
          </li>
          <li>
           <button onClick={() => navigate("/users")}>
              GitHub Users
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/profile")}>
              GitHub Profile
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar