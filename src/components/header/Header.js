import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiDownload, FiLinkedin, FiStar, FiSettings } from "react-icons/fi";
import ReactDOM from 'react-dom';
import { TiThMenu } from "react-icons/ti";
import { FontAwesomeIcon ,} from '@fortawesome/react-fontawesome';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';



import './header.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BrandExample from "./BrandExample";


function Header(name, ...props) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (


    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand id="react" href="#home">PROJECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Link to="/" className="me-2">Acceuil </Link>
              <Link to="/clients" className="justify-content-end me-2">Clients </Link>


              <NavDropdown title="Articles" id="basic-nav-dropdown">

                < Link to='/vetement'>Vetements</Link>

                <NavDropdown.Item href="#action/3.2">
                  Chaussures
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Montres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Autres
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id='fixe1' href="#link">A propos</Nav.Link>



            </Nav>

          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end basic-navbar-nav me-2">
            <Navbar.Text className="me-2">
              <FiLinkedin />
            </Navbar.Text>
            <Navbar.Text className="me-2">
              <FiDownload />
            </Navbar.Text>
            <Navbar.Text className="me-2">
              <FiStar />
            </Navbar.Text>
            <Navbar.Text className="me-2">
              <FiSettings />
            </Navbar.Text>
            <Navbar.Text className="me-2">
              <TiThMenu variant="primary" onClick={handleShow} >
                {name}
              </TiThMenu>
              <Offcanvas show={show} placement="end"onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title> Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <BrandExample></BrandExample>
                </Offcanvas.Body>
              </Offcanvas>

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>




  );
}

export default Header;

