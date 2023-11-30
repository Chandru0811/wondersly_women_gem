import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import "../../style/custom.css";
import Logo from "../../asset/wwg.png";

function Header() {
  const expand = "lg";
  return (
    <>
      <Navbar expand={expand} className="bg-body-tertiary mb-3 header" >
        <Container fluid>
          <Navbar.Brand href="#"><img src={Logo} alt="WWG" className='img-fluid' width={80} height={80}/></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Women
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                <NavDropdown
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
                </NavDropdown>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
              </Nav>
              <Nav className='d-flex'> 
                <button className='btn donateBtn'>Donate</button>
                <button className='btn volunteerBtn'>Volunteer</button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
