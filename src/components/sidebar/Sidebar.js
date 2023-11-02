import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
<div class="container-fluid cont justify-content">
      <div  class="row flex-nowrap">
      
          <div  class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 p-3 mb-2 bg-transparent text-dark border " >
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

          </div>
          
          <div>
            
          <nav class=" navbar-expand-lg p-3 mb-2 bg-secondary text-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Other Services</a>
        </li>
      </ul>
     
   
  </div>
</nav>
<div  class="container">
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
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-pencil">Modifier</i></a>
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-delete">Supprimer</i></a>
            </td>
        </tr>
        <tr>
            <td class="table-user">
        
                Ann C. Thompson
            </td>
            <td>SB646 473 2057</td>
            <td>January 25, 1959</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-pencil">Modifier</i></a>
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-delete">Supprimer</i></a>
            </td>
        </tr>
        <tr>
            <td class="table-user">
        
                Paul J. Friend
            </td>
            <td>DL281 308 0793</td>
            <td>September 1, 1939</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-pencil">Modifier</i></a>
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-delete">Supprimer</i></a>
            </td>
        </tr>
        <tr>
            <td class="table-user">
        
                Sean C. Nguyen
            </td>
            <td>CA269 714 6825</td>
            <td>February 5, 1994</td>
            <td class="table-action">
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-pencil">Modifier</i></a>
                <a href="javascript: void(0);" class="action-icon"> <i class="mdi mdi-delete">Supprimer</i></a>
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

export default Sidebar;
