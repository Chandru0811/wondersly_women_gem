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
              width={110}
              height={110}
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
                Wondrously Woman Gem
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
                  <NavDropdown.Item as={NavLink} to="/events/ladyboss" onClick={handleClick}>
                    Wonderwoman
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/events/youth" onClick={handleClick}>
                    SunRise Youth Club
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/events/child" onClick={handleClick}>
                    Periwinkle Children Foundation
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="#" onClick={handleClick}>
                  Career
                </Nav.Link>
                <NavDropdown title="Join us">
                  <NavDropdown.Item
                    href="https://forms.gle/mnHc56Ch3mCe2ScD6"
                    target="_blank"
                    onClick={handleClick}
                  >
                    Member
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://forms.gle/R1UrUpH16r3WcF178"
                    target="_blank"
                    onClick={handleClick}
                  >
                    Beneficial
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/volunteer" onClick={handleClick}>
                    Volunteer
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link as={NavLink} to="/volunteer" onClick={handleClick}>
                  Join us
                </Nav.Link> */}

                <Nav.Link to="#" onClick={handleClick}>
                  Blogs
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/wwgem?mibextid=hIlR13"
                  target="_blank"
                >
                  <FaFacebookF />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/thesunriseyc?igsh=MTUyanZwZmM2eXNrZw=="
                  target="_blank"
                >
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
