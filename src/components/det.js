import React from "react";
import "./detail.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from "../data.json";


function Detail() {


  const { client_id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    // Rechercher le client ayant l'id
    const selectedClient = data.clients.find((c) => c.id === client_id);
    setClient(selectedClient);
  },
    [client_id]);
   

  return (
    <>



      <div id="card-D" class="col-6" >

        <div class="card ">
          <div class="card-header">
            <strong> Détails </strong>
          </div>
          <div class="card-body card-block">
            <form action="" method="post" class="">
              <div class="form-group"><label for="nf-nom" class=" form-control-label">Nom</label><input type="text" id="nf-nom" name="nom" class="form-control"  disabled value={client ? client.prenom : ''}/></div>
              <div class="form-group"><label for="nf-prenom" class=" form-control-label">Prenom</label><input type="text" id="nf-prenom" name="prenom" placeholder={client.prenom}   disabled class="form-control" /></div>
              <div class="form-group"><label for="nf-age" class=" form-control-label">Age</label><input type="" id="nf-prenom" name="age" disabled placeholder="{client.age}" class="form-control" /></div>
              <div class="form-group"><label for="nf-sexe" class=" form-control-label">Sexe</label><input type="text" id="nf-sexe" name="sexe" disabled placeholder="{client.sexe}" class="form-control" /></div>
            </form>
          </div>
          <div class="card-footer">
            <Link to='/'>
              <button type="reset" class="btn btn-primary btn-sm">
                Retour
              </button>
            </Link>
          </div>
        </div>


      </div>
      
      
    </>
    

  );
}

export default Detail;

<Route exact path={'/detail:client_id'} component={Detail}>
