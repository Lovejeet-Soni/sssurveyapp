import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../Images/logo.png"; // Update the path to your logo file
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../Images/backgroundImage2.jpg"
const Homepage = () => {
  // Set default active link to 'home'
  const [activeLink, setActiveLink] = useState("home");

  // Function to handle the link click and apply the underline effect
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    // Ensure the home link is set as the active link by default when the page loads
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
          background: "rgba(26, 25, 25, 0.42)", // Slightly darkened background for visibility on all screens
          zIndex: 10,
          boxShadow: "0 4px 6px rgba(26, 25, 25, 0.42)",
          padding: "10px 0",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="navbar-dark"
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white", fontWeight: "bold" }}>
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
              backgroundColor: "black", // Set the toggle button color to match the theme
              borderColor: "rgb(19, 75, 136)", // Optional: Make the border of the button the same color
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                onClick={() => handleLinkClick("home")}
                style={{
                  color: activeLink === "home" ? "blue" : "white", // Active link color
                  fontWeight: "bold",
                  margin: "0 15px",
                  position: "relative",
                }}
              >
                {/* Home Icon */}
                Home
                <span
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    backgroundColor: "#ff9933",
                    bottom: 0,
                    left: 0,
                    transform: activeLink === "home" ? "scaleX(1)" : "scaleX(0)", // Underline animation on click
                    transformOrigin: "bottom right",
                    transition: "transform 0.3s ease-out",
                  }}
                />
              </Nav.Link>
              {["about", "services", "projects", "contact", "blog"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item}`}
                  onClick={() => handleLinkClick(item)}
                  style={{
                    color: activeLink === item ? "blue" : "white", // Active link color
                    fontWeight: "bold",
                    margin: "0 15px",
                    position: "relative",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize the first letter */}
                  <span
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#ff9933",
                      bottom: 0,
                      left: 0,
                      transform: activeLink === item ? "scaleX(1)" : "scaleX(0)", // Underline animation on click
                      transformOrigin: "bottom right",
                      transition: "transform 0.3s ease-out",
                    }}
                  />
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section
        className="text-light text-center d-flex align-items-center justify-content-center py-5"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Full screen height
          zIndex: 1, // Ensure the background image stays below the navbar
          paddingTop: "80px", // Add space between navbar and text
        }}
      >
        <Container style={{ position: "relative", zIndex: 1, textAlign: "left" }}>
          <h1
            className="display-4"
            style={{
              background: "linear-gradient(90deg, rgb(171, 197, 224), #ff9933)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              fontWeight: "bold",
              textShadow: "4px 2px 4px rgba(249, 146, 3, 0.67)",
              color: "rgb(95, 165, 239)",
              marginBottom: "20px",
            }}
          >
            Ss Survey Point
          </h1>
          <p
            className="lead"
            style={{
              background: "linear-gradient(90deg, rgb(171, 197, 224), #ff9933)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              fontWeight: "bold",
              textShadow: "4px 2px 4px rgba(249, 146, 3, 0.67)",
              color: "rgb(95, 165, 239)",
              marginTop: "0",
            }}
          >
            Expert Land Surveying and Civil Services in Ratanada, Jodhpur
          </p>
        </Container>
      </section>
    </Container>
  );
};

export default Homepage;
