import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Users/ningchu/Desktop/landing-page/src/images/hero/WOD.svg';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out  ${!top && 'bg-gray-100 backdrop-blur-sm shadow-lg '}`}>
      <div className="max-w-6xl mx-auto px-5   sm:px-6 md:h-30">
        <div className="flex items-center justify-between h-12 ">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-2">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="flex-shrink-0 mr-4">
            <h1
              className="text-sm font-oswald font-bold  tracking-wider leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-000 "
            >
              WOD SQUAD
            </h1>
          </div>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signup" className="tracking-wider btn-sm text-xs font-bold  md:font-bold  hover:bg-gray-800 hover:text-white hover:drop-shadow-xl bg-yellow-100 text-gray-800 ml-3">
                  <span>GET STARTED</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
