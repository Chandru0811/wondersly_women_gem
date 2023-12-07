import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import "../../style/custom.css";
import Logo from "../../asset/wwg.png";
import { Link } from "react-router-dom";

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
                <Link
                    to="/"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Link>
                </Nav.Link>

                {/* <NavDropdown
                  title="Service"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}

                <Nav.Link>
                  <Link
                    to="/about"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    About Us
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link
                    to="/contact"
                    style={{
                      color: "rgba(0, 0, 0, 0.85)",
                      textDecoration: "none",
                    }}
                  >
                    Contact Us
                  </Link>
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
