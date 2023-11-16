import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './form.css';
import data2 from "../../data2.json";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Ajouter() {
  const [value, setValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const onChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    // Vérifiez si la valeur saisie a au moins trois caractères.
    if (inputValue.length >= 3) {
      // "Utilisez la fonction de filtre pour trouver le pays avec l'indication correspondante."
      const matchingCountry = data2.Infos.find(
        (info) => inputValue.startsWith(info.indication)
      );

      // "Définir le pays sélectionné dans le state."
      setSelectedCountry(matchingCountry ? matchingCountry.pays : 'Pays inconnu');
    } else {
      // "Si l'entrée comporte moins de trois caractères, afficher Pays innconu."
      setSelectedCountry('Pays inconnu');
    }
  };

  return (
    <div id="card-M" class="col-6">
      <div class="card">
        <div class="card-header">
          <strong>Inscription</strong>
        </div>
        <div class="card-body card-block">
          <form action="" method="post" class="">
            <div class="form-group"><label for="nf-nom" class=" form-control-label">Nom</label><input type="text" id="nf-nom" name="nom" class="form-control" /></div>
            <div class="form-group"><label for="nf-prenom" class=" form-control-label">Prenom</label><input type="text" id="nf-prenom" name="prenom" class="form-control" /></div>
            <div class="form-group"><label for="nf-numero" class=" form-control-label">Numéro</label><input type="tel" id="nf-numero" name="numero" class="form-control" value={value} onChange={onChange} /></div>
            <div class="form-group"><label for="nf-pays" class=" form-control-label">Pays</label><input type="text" id="nf-pays" name="pays" class="form-control" value={selectedCountry}  /></div>
          </form>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-primary btn-sm me-2">
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
