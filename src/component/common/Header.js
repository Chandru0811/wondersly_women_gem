import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../style/custom.css";
import Logo from "../../asset/wwg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

function Header() {
  const expand = "lg";

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary header">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" onClick={handleClick}>
            <img
              src={Logo}
              alt="WWG"
              className="img-fluid"
              width={80}
              height={80}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
                {/* <NavDropdown title="About us">
                  <NavDropdown.Item as={NavLink} to="/about" onClick={handleClick}>
                    Wondrously Women Gem
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/join-us">
                    Our Goal
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/HER-STORY">
                    Her Story
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Our-Board">
                    Our Board
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Board-Committee">
                    Board Committee
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/Our-Services">
                    Our Services
                  </NavDropdown.Item>
                </NavDropdown> */}

                <Nav.Link as={NavLink} to="/about" onClick={handleClick}>
                  About us
                </Nav.Link>

                <Nav.Link as={NavLink} to="/contact" onClick={handleClick}>
                  Contact
                </Nav.Link>
                <Nav.Link to="#" onClick={handleClick}>
                  Program
                </Nav.Link>
                <NavDropdown title="Events">
                  <NavDropdown.Item as={NavLink} to="/events/ladyboss">
                    Wonderwoman
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/events/youth">
                    SunRise Youth Club
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/events/child">
                    Periwinkle Children Foundation
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/volunteer" onClick={handleClick}>
                  Join us
                </Nav.Link>
                <Nav.Link to="#" onClick={handleClick}>
                  Career
                </Nav.Link>
                <Nav.Link to="#" onClick={handleClick}>
                  Blogs
                </Nav.Link>
                <Nav.Link>
                  <FaFacebookF />
                </Nav.Link>
                <Nav.Link>
                  <FaInstagram />
                </Nav.Link>
                <Nav.Link>
                  <FaLinkedinIn />
                </Nav.Link>
                <Nav.Link>
                  <FaTiktok />
                </Nav.Link>
              </Nav>
              <Button
                to="/donate"
                as={NavLink}
                onClick={handleClick}
                variant="danger"
                className="donateBtn"
              >
                Donate
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
