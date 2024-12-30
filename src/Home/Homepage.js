import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import logo from "../Images/logo.png"; // Update the path to your logo file
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage1 from "../Images/background.jpg";
import backgroundImage2 from "../Images/swiping1.jpg";
import backgroundImage3 from "../Images/swipingimage.jpg";

const Homepage = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [activeLink, setActiveLink] = useState("home");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    setActiveLink("home");
  }, []);

  return (
    <Container fluid className="p-0" id="home">
      {/* Fixed Navbar */}
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(26, 25, 25, 0.85)",
          zIndex: 10,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          padding: "10px 0",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="navbar-dark"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{
              fontFamily: "Times New Roman",
              fontWeight: "bold",
              color: "orange",
            }}
          >
            <img
              src={logo}
              alt="Ss Survey Point"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              backgroundColor: "black",
              borderColor: "rgb(19, 75, 136)",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                onClick={() => handleLinkClick("home")}
                style={{
                  color: activeLink === "home" ? "blue" : "white",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  margin: "0 15px",
                  position: "relative",
                  transition: "color 0.3s ease",
                }}
              >
                Home
              </Nav.Link>
              {["about", "services", "contact", "faqs"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => handleLinkClick(item)}
                  style={{
                    color: activeLink === item ? "blue" : "white",
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                    margin: "0 15px",
                    position: "relative",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel Section */}
      <Carousel
        activeIndex={currentIndex}
        onSelect={handleSelect}
        fade
        interval={5000}
        controls
        indicators
        wrap
        className="homepage-carousel"
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "10%",
                  zIndex: 2,
                  color: "white",
                }}
              >
                <h1 className="carousel-text">Ss Survey Point</h1>
                <p className="carousel-subtext">
                  Expert Land Surveying and Civil Services in Ratanada, Jodhpur
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <style>
        {`
          .carousel-text {
            font-size: 3rem;
            font-family: "Poppins, sans-serif";
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          }
          .carousel-subtext {
            font-size: 1.5rem;
            font-family: "Poppins, sans-serif";
            text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
          }
          @media (max-width: 768px) {
            .carousel-text {
              font-size: 2rem;
            }
            .carousel-subtext {
              font-size: 1rem;
            }
          }
          @media (max-width: 576px) {
            .carousel-text {
              font-size: 1.5rem;
            }
            .carousel-subtext {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Homepage;
