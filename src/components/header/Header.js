import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsFillPencilFill, BsFillTrashFill} from 'react-icons/bs';



import './header.css';


function Header() {
  return (

<div>
<Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand id ="react" href="#home">PROJECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id='fixe1'href="#home">Acceuil</Nav.Link>
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> Vetements</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Chaussures
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Montres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Autres
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id='fixe1'href="#link">A propos</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<div class="container-fluid cont justify-content" >
      <div  class="row flex-nowrap">
      
          
          <div  class="sides p-3 mb-2 bg-secondary text-white"id="fixe" >
              <div  class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              
                  <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                     
                  </a>
                  <ul class="p-3 mb-2 bg-secondary text-white " id="menu">
                      <li class="nav-item ">
                          <a href="#" class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house "></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white"><strong>DASHBOARD</strong></span>
                          </a>
                      </li>
                      
                      <li>
                          <a href="#" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Clients</span></a>
                      </li>
                      
                      <li>
                          <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                              <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Commandes</span></a>
                          <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                              
                          </ul>
                      </li>
                      <li>
                          <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Catégories</span> </a>
                              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                             
                          </ul>
                      </li>
                      <li>
                          <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Rapports</span> </a>
                              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                             
                          </ul>
                      </li>
                      <li>
                          <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Compte</span> </a>
                              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                             
                          </ul>
                      </li>
                      
                      </ul>
                     
                      </div>
                      </div>


          
          <div>
            
        
  
<table class="table table-striped table-centered mb-0" id="tables">
    <thead>
        <tr>
            <th>Article</th>
            <th>Prix Unit</th>
            <th>Quantity</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="table-user">
        
                Risa D. Pearson
            </td>
            <td>AC336 508 2157</td>
            <td>July 24, 1950</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <BsFillPencilFill/></a>
                <a href="javascript: void(0);" class="action-icon">  	  < BsFillTrashFill id="sup"  /><a/>
</a>
            </td>
        </tr>
        <tr>
            <td class="table-user">
        
                Ann C. Thompson
            </td>
            <td>SB646 473 2057</td>
            <td>January 25, 1959</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <BsFillPencilFill/></a>
                <a href="javascript: void(0);" class="action-icon"> <BsFillTrashFill id="sup"/></a>
            </td>
        </tr>
        <tr>
            <td class="table-user">
        
                Paul J. Friend
            </td>
            <td>DL281 308 0793</td>
            <td>September 1, 1939</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <BsFillPencilFill/></a>
                <a href="javascript: void(0);" class="action-icon"> <BsFillTrashFill id="sup"/></a>
            </td>
        </tr>
        <tr>
            <td class="table-user">
        
                Sean C. Nguyen
            </td>
            <td>CA269 714 6825</td>
            <td>February 5, 1994</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <BsFillPencilFill/></a>
                <a href="javascript: void(0);" class="action-icon"> <BsFillTrashFill id="sup"/></a>
            </td>
        </tr>
        
    </tbody>
</table>
</div>
          </div>
         
  
      </div>
      </div>

        );
    }
    
    export default Header;