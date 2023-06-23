import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navbar.css";

// menerima prop dapat dengan menggunakan prop atau dengan const NavbarMain = (prop)
const NavbarMain = ({ menu, logo }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="navbar-bg"
        expand="lg"
        variant="light"
      >
        <Container className="container-content">
          <Navbar.Brand href="#home" className="bg-logo"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="navbar-right" id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {/* <Nav> */}
            {menu.map((item) => (
              <Nav>
                <Nav.Link href="#memes">{item}</Nav.Link>
              </Nav>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMain;
