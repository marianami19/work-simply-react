import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../images/work-simply-logo-svg.svg'; // Importing the image

const NavBar = () => {
  return (
    <div>
      <section className="py-5">
        <nav className="navbar navbar-expand-md bg-light fixed-top">
          <div className="container">
          <Link className="navbar-brand"  to="/">
        <img alt="Free Frontend Logo"  height="72" src={Img} width="300" /></Link><button aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent2" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent2">
              <ul className="navbar-nav ms-auto my-2 my-md-0">
               
                <li className="nav-item  ms-md-4">
                  <Link className="nav-link" to="/about" >About</Link>
                </li>
                <li className="nav-item  ms-md-4">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>

              
              </ul>
            </div>
          </div>
        </nav>
      </section>

    </div>
  );
};

export default NavBar;
