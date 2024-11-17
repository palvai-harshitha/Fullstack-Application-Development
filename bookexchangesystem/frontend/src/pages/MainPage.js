
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import '../assets/css/main.css'; 
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/img/favicon.png';
import '../assets/img/apple-touch-icon.png';
import heroimage from '../assets/img/hero-img.png';
import { Footer,Header } from '../components';
import { Link } from 'react-router-dom';




// Assuming you are using the default CSS or custom styles
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS for animations

function MainPage() {
    const services = [
        {
          title: "Find your book",
          description:
            "Search the book that you want to read. BES provides a fully comprehensive list of books from various authors in different languages.",
          icon: "bi bi-activity",
        },
        {
          title: "Request the book",
          description:
            "Request to lend or get the book from the book's owner. We let the owner decide to lend or give their books away.",
          icon: "bi bi-bounding-box-circles",
        },
        {
          title: "Return the book",
          description:
            "Return the book on time to let others read it. We will remind you when you need to return the book.",
          icon: "bi bi-calendar4-week",
        },
        {
          title: "CHAT",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
          icon: "bi bi-broadcast",
        },
      ];
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 3000)
    }

    /*const fetchProducts = async () => {
        try {
            const url = "http://localhost:8080/addbook/";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    */
    useEffect(() => {
        // Initialize AOS library (for animations)
        AOS.init();
      }, []);
    return (
        <div className="index-page">
        {/* Header */}
        <Header/>
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
            <div className="container">
            <div className="row gy-4">
                <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
                <h1>Book Exchange System</h1>
                <p>Here we can Exchange Books.</p>
                <div className="d-flex">
                
                <Link className="btn-get-started" to="/signin">Join Now</Link>
                <Link className="btn-get-started" to="/viewbooks"><i className="bi bi-book"><span>Find Books</span></i></Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src={heroimage} className="img-fluid animated" alt="Hero"/>
              </div>
            </div>
          </div>
        </section>
  
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>
  
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Welcome to the Book Exchange System, a community-driven platform dedicated to promoting the sharing and discovery of books. Our mission is to connect readers from diverse backgrounds, offering them a space to exchange books, broaden their horizons, and connect over a shared love of literature.
                </p>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <p>Whether you’re looking to trade a novel you’ve already read or discover a new favorite, our system makes it easy to browse available titles, connect with fellow readers, and engage in the timeless practice of book exchange. Join us, share your stories, and help foster a more connected, well-read community!</p>
                <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section id="services" className="services section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
  
          <div className="container">
            <div className="row gy-4">
              {services.map((service, index) => (
                <div className="col-xl-3 col-md-6 d-flex" key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <div className="service-item position-relative">
                    <div className="icon"><i className={service.icon}></i></div>
                    <h4><a href="#" className="stretched-link">{service.title}</a></h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
       {/* Contact Section */}
      
  
        {/* Footer */}
        <Footer/>
        <ToastContainer/>
      </div>

    )
}

export default MainPage
