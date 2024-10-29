import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-4">
            <h5 className="text-uppercase mb-3">Work-Simply</h5>
            <p style={{width: '250px'}}>
              Empowering business leaders with tailored solutions to streamline processes and drive growth.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Links</h5>
            <ul className="list-unstyled">
              <li className='mb-3'>
                {/* <a href="/" className="text-dark text-decoration-none">Home</a> */}
                <Link className="text-dark text-decoration-none"  to="/">Home</Link>
              </li>
              <li className='mb-3'>
                {/* <a href="/about" className="text-dark text-decoration-none">About</a> */}
                <Link className="text-dark text-decoration-none" to="/about" >About</Link>
              </li>
              <li className='mb-3'>
                {/* <a href="/contact" className="text-dark text-decoration-none">Contact</a> */}
                <Link to="/contact" className="text-dark text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p> info@work-simply.com</p>
            <p> +1 (123) 456-7890</p>
            <div>
              <a href="#" className="me-4 text-dark">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-4 text-dark">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-4 text-dark">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light">
        © 2024 Work-Simply. All rights reserved.
      </div>
    </footer>
  );
}
