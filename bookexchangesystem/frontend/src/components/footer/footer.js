
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import '../../assets/css/main.css'; 
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../assets/img/favicon.png';
import '../../assets/img/apple-touch-icon.png';
import heroimage from '../../assets/img/hero-img.png';

import SearchBar from '../../components/searchbar/searchbar';
import {Link} from 'react-router-dom';


// Assuming you are using the default CSS or custom styles
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS for animations
function footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              
                <Link className="d-flex align-items-center" to="/">
                <span className="sitename">BES</span>
                </Link>
              <div className="footer-contact pt-3">
                <p>Moula Ali</p>
                <p>Chikki akka illu 500040</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+91 9100000000</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#home">Home</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#web-design">Web Design</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#web-dev">Web Development</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> Book Exchange System</p>
        </div>
      </footer>
    </div>
  )
}

export default footer
