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

        <Dropdown as={Col} xs="auto" sm="auto" md="auto" lg="auto" xl="auto" className='proDrop'>
  <Dropdown.Toggle className="primary" id="dropdown-basic">
    Products
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
    <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
    <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


        <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form-control"
              size="25"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Col>

        <Navbar.Collapse id="navbarScroll">
          <Row className="me-auto my-2 my-lg-0">
            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#action1">Home</Nav.Link>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#action2">Link</Nav.Link>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Dropdown as={NavDropdown} title="Link" id="navbarScrollingDropdown">
                <Dropdown.Item href="#action3">Action</Dropdown.Item>
                <Dropdown.Item href="#action4">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action5">Something else here</Dropdown.Item>
              </Dropdown>
            </Col>
            <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Col>
          </Row>
        </Navbar.Collapse>

        <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
          <i className="fa fa-filter"> Filter</i>
        </Col>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
