import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav'; // Import Nav
import NavDropdown from 'react-bootstrap/NavDropdown'; // Import NavDropdown

import './Navbar.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" form-control />

      

<Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
          <i className="fa fa-filter md=auto m-4"> Filter</i>
        </Col>

        <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form-control"
              size="25"
              aria-label="Search"
            />
            <Button variant="outline-success" className="searchButton">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Col>

        <Navbar.Collapse id="navbarScroll">
          <Row className="me-auto my-2 my-lg-0">
            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#action1">Home</Nav.Link>
            </Col>
            


            {/* <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Dropdown as={NavDropdown} title="Link" id="navbarScrollingDropdown">
                <Dropdown.Item href="#action3">Action</Dropdown.Item>
                <Dropdown.Item href="#action4">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action5">Something else here</Dropdown.Item>
              </Dropdown>
            </Col> */}

<Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" >
              <NavDropdown title="Auctions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Previous Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Bid Now
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

              </Nav.Link>


             


              
            </Col>


            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" >
              <NavDropdown title="Product Listing" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Product 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Product 5
              </NavDropdown.Item>
            </NavDropdown>

              </Nav.Link>


             


              
            </Col>



            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" >
              <NavDropdown title="Service Listing" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Service 2
                            </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Service 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Service 4
                            </NavDropdown.Item>
            </NavDropdown>

              </Nav.Link>


             


              
            </Col>

            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" >
               Reverse Auctions
              </Nav.Link>
            </Col>

            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" >
                Virtual Meet  
              </Nav.Link>
            </Col>


            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" >
               Inquiries  
              </Nav.Link>
            </Col>

          </Row>
        </Navbar.Collapse>

       
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
