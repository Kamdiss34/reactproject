import React from "react";
import "./sidebar.css";

function Sidebar1() {
  return (

      

          <div  class="sides p-3 mb-2 bg-secondary text-white">
              <div  class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              
                  <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                     
                  </a>
                  <ul class="p-3 mb-2 bg-secondary text-white " id="menu">
                      <li class="nav-item ">
                          <a href="#" class="nav-link align-middle px-0">
                              <i class="fs-4 bi-house "></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Dashboard</span>
                          </a>
                      </li>
                      <li>
                          <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                              <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline p-3 mb-2 bg-secondary text-white">Articles</span> </a>
                          <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                              
                          </ul>
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

         
          
         
          );
}

export default Sidebar1;