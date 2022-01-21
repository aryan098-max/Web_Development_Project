//STEP 1 -- IMPORT REACT
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../pages/Navbar.css";

import { Person, Cart4, Heart } from "react-bootstrap-icons";

import { Link } from "react-router-dom";

import { Container, Image, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function NavbarHead() {
  return (
    <Container
      className="shadow-sm mb-4"
      bg="white"
      style={{ maxWidth: "initial" }}
    >
      <Navbar collapseOnSelect expand="xl" bg="white">
        <Navbar.Brand>
          <Link className="text-decoration-none" exact to="/">
            <Image
              className="img-fluid"
              style={{ height: "40px" }}
              src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon-715x715.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing" style={{ color: "#282C3F" }}>
              Pricing
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                className="text-decoration-none"
                to="/contact"
                style={{ color: "#282C3F" }}
              >
                Contact
              </Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            {/*two column*/}

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <div class Name="dropdown-menu multi-column columns-2">
                <Row>
                  <Col className="col-sm-6">
                    <div className="multi-column-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-sm-6">
                    <div className="multi-column-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </div>
                  </Col>
                </Row>
              </div>
            </NavDropdown>
          </Nav>

          {/* icons */}

          <div
            className="d-inline-flex"
            style={{
              fontSize: "0.8rem",
            }}
          >
            <Nav>
              <Nav.Link>
                <Link
                  className="text-decoration-none"
                  to="/login"
                  style={{ color: "#282C3F", fontWeight: "600" }}
                >
                  <Heart
                    style={{
                      height: "20px",
                      width: "20px",
                      marginBottom: "5px",
                    }}
                  />{" "}
                  <Nav.Item>Wishlist</Nav.Item>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  className="text-decoration-none"
                  to="/login"
                  style={{ color: "#282C3F", fontWeight: "600" }}
                >
                  <Person
                    style={{
                      height: "20px",
                      width: "20px",
                      marginBottom: "5px",
                    }}
                  />
                  <Nav.Item>Profile</Nav.Item>
                </Link>
              </Nav.Link>

              <Nav.Link>
                
                  
                  <Nav.Item>
                    <a className="text-decoration-none" style={{color: "#282C3F", fontWeight: "600"}} href="cart.html"><Cart4
                    style={{
                      height: "20px",
                      width: "20px",
                      marginBottom: "5px",
                    }}
                  />Cart</a>
                  </Nav.Item>
                
              </Nav.Link>
            </Nav>
          </div>
          {/* icon-end */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

//STEP 3 -- EXPORT IT TO USE IT
export default NavbarHead;
