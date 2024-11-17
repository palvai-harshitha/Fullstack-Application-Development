import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/main.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import heroimage from '../../assets/img/hero-img.png';
import SearchBar from '../../components/searchbar/searchbar';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const handleBookIconClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(`/history/${token}`);
    } else {
      alert('User ID not found. Please log in again.');
      navigate(`/home`);
    }
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">BES</h1>
          </a>
          
          <nav id="navmenu" className="navmenu">
            <ul style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <li><SearchBar /></li>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Add Books</a></li>
              <li><Link className="dropdown-item" to="/viewbooks">View Books</Link></li>
              
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          {isLoggedIn ? (
            <div className="icons-container d-flex align-items-center" style={{ marginLeft: '20px' }}>
              <FontAwesomeIcon 
                icon={faBook} 
                style={{ fontSize: '2.5rem', marginRight: '1.5rem', cursor: 'pointer', color: '#fff' }} 
                title="Books"
                onClick={handleBookIconClick} // Navigate to /history/{id} on click
              />
              
              <div 
                className="dropdown" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }} // Dropdown positioned relative to this container
              >
                <FontAwesomeIcon
                  icon={faUser} 
                  style={{ fontSize: '2.5rem', cursor: 'pointer', color: '#fff', marginRight: '1.5rem' }} 
                  title="Profile" 
                />
                {dropdownOpen && (
                  <ul 
                    className="dropdown-menu" 
                    style={{
                      display: 'block',
                      position: 'absolute',
                      top: '100%', // Below the icon
                      right: '0',  // Align to the right edge
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      borderRadius: '5px',
                      zIndex: 1000,
                      minWidth: '150px',
                      padding: '10px 0',
                    }}
                  >
                    <li>
                      <Link className="dropdown-item" to="/edit-profile" style={{ padding: '10px 20px' }}>
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/my-profile" style={{ padding: '10px 20px' }}>
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <button 
                        className="dropdown-item" 
                        style={{
                          padding: '10px 20px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          width: '100%',
                          textAlign: 'left',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          localStorage.removeItem('token');
                          localStorage.removeItem('loggedInUser'); 
                          setIsLoggedIn(false);
                          setTimeout(() => {
                            navigate('/home');
                          }, 1000);
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <Link className="btn-getstarted" to="/login" style={{ marginLeft: '20px' }}>Login/Signup</Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
