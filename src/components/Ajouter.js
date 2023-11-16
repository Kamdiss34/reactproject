import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './ajouter.css'
import data from "../data.json";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Ajouter() {

    return (
        <div id="card-M" class="col-6">
            <div class="card">
                <div class="card-header">
                    <strong>Ajouter un nouveau client</strong>
                </div>
                <div class="card-body card-block">
                    <form action="" method="post" class="">
                        <div class="form-group"><label for="nf-nom" class=" form-control-label">Nom</label><input type="text" id="nf-nom" name="nom" class="form-control"   /></div>
                        <div class="form-group"><label for="nf-prenom" class=" form-control-label">Prenom</label><input type="text" id="nf-prenom" name="prenom"    class="form-control" /></div>
                        <div class="form-group"><label for="nf-age" class=" form-control-label">Age</label><input type="" id="nf-prenom" name="age"     class="form-control" /></div>
                        <div class="form-group"><label for="nf-sexe" class=" form-control-label">Sexe</label><input type="text" id="nf-sexe" name="sexe"    class="form-control" /></div>
                    </form>
                </div>
                <div class="card-footer">

                    <button type="submit" class="btn btn-primary btn-sm">
                        Enregister
                    </button>
                    <Link to='/'>
                        <button type="reset" class="btn btn-danger btn-sm">
                            Annuler
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Ajouter;
