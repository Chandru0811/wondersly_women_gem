// Inside your React component (Header.jsx)
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import "../../style/custom.css";
import Logo from "../../asset/wwg.png";
import { NavLink } from "react-router-dom";

function Header() {
  const expand = "lg";

  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary header">
        <Container fluid>
          <Navbar.Brand href="#">
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
                Wondrously Woman Gem
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </NavLink>
                </Nav.Link>

                <NavDropdown
                  title="Events"
                  exact
                  activeClassName="active"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item className="eventList">
                  <NavLink
                    to="/events/ladyboss"
                    exact
                    activeClassName="actives"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    LadyBoss
                  </NavLink>
                    </NavDropdown.Item>
                  <NavDropdown.Item className="eventList">
                  <NavLink
                    to="/events/youth"
                    exact
                    activeClassName="actives"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                      width: "100%"
                    }}
                  >
                    Youth
                  </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="eventList">
                  <NavLink
                    to="/events/child"
                    exact
                    activeClassName="actives"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    Children
                  </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    About Us
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/contact"
                    activeClassName="active"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    Contact Us
                  </NavLink>
                </Nav.Link>
              </Nav>
              <Nav className="d-flex">
                <button className="btn donateBtn">Donate</button>
                <button className="btn volunteerBtn">Volunteer</button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
