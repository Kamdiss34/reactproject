import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './client.css'
import data from "../../../data.json";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function ClientDetail() {

    return (
        <div id="card-M" class="col-4">
            <div class="card">
                <div class="card-header">
                    <strong>Client</strong>
                </div>
                <div class="card-body card-block">
                    <form action="" method="post" class="">
                        <div class="form-group"><label for="nf-nom" class=" form-control-label">Nom</label><input type="text" id="nf-nom" name="nom" placeholder='ADEOTI' class="form-control"   /></div>
                        <div class="form-group"><label for="nf-prenom" class=" form-control-label">Prenom</label><input type="text" id="nf-prenom" placeholder='Nabil'name="prenom"    class="form-control" /></div>
                        <div class="form-group"><label for="nf-age" class=" form-control-label">Age</label><input type="" id="nf-prenom" name="age"  placeholder='21' class="form-control" /></div>
                        <div class="form-group"><label for="nf-sexe" class=" form-control-label">Sexe</label><input type="text" id="nf-sexe" name="sexe"  placeholder='M'  class="form-control" /></div>
                    </form>
                </div>
                
            </div>
        </div>

    );
}

export default ClientDetail;
