// Facture.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';
import facture from './facture.json';
import Inlineform from '../Inlineform/inlineform';
import './facture.css';
import { Row } from 'react-bootstrap';
import ClientDetail from './Client.js/client';

function Facture(props) {
  const [achats, setAchats] = useState(facture.achats || []);
  const [taxRate] = useState(0.18); // Taux = 18%
  const [totalHT, setTotalHT] = useState(0);
  const [totalTTC, setTotalTTC] = useState(0);

  const handleAjouter = (formData) => {
    // Mettre à jour les données du tableau avec les nouvelles données du formulaire.
    setAchats([...achats, { ...formData, id: achats.length + 1 }]);
  };

  const calculateTotalHT = () => {
    return achats.reduce((total, achat) => total + parseFloat(achat.total), 0);
  };

  const handleSupprimer = (id) => {
    // Supprimez la ligne avec l'ID spécifié
    const updatedAchats = achats.filter((achat) => achat.id !== id);
    setAchats(updatedAchats);
  };

  useEffect(() => {
    // Recalculer le total HT quand les achats changes 
    const totalHT = calculateTotalHT();
    setTotalHT(totalHT);
    document.getElementById('nf-Total').value = totalHT.toFixed(2);

    //Recalculer le total TTC à chaque modification du total HT ou du taux de taxe.
    const totalTTC = (totalHT + totalHT * taxRate);
    setTotalTTC(totalTTC);
    document.getElementById('nf-TTC').value = totalTTC.toFixed(2);
  }, [achats, taxRate]);

  return (
    <> 
    <ClientDetail></ClientDetail>
      <Inlineform onSubmit={handleAjouter} />

      <div>
        <table className="table table-success table-striped" id="tables">
          {}
          <thead>
            <tr>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
              <th>{props.col4}</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {achats.map((achat) => (
              <tr key={achat.id}>
                <td className="table-user">{achat.article}</td>
                <td>{achat.prix}</td>
                <td>{achat.quantite}</td>
                <td>{achat.total}</td>
                <td className="table-action">
                  <button
                    className="me-2"
                    onClick={() => handleSupprimer(achat.id)}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                  >
                    <BsFillTrashFill id="sup" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Row>
          <div id="Total" className="form-group col-2">
            <label htmlFor="nf-Total" className="form-control-label">
              <strong>Total HT</strong>
            </label>
            <input type="tel" id="nf-Total" name="Total" readOnly className="form-control col-3" />
          </div>
          <div id="Total" className="form-group col-2 me-1">
            <label htmlFor="nf-Taxe" className="form-control-label">
              <strong>Taxe</strong>
            </label>
            <input type="tel" id="nf-Taxe" name="Taxe" value={`${(taxRate * 100).toFixed(0)}%`} readOnly className="form-control col-3" />
          </div>
          <div id="Total" className="form-group col-2">
            <label htmlFor="nf-TTC" className="form-control-label">
              <strong>Total TTC</strong>
            </label>
            <input type="tel" id="nf-TTC" name="TTC" readOnly className="form-control col-3" />
          </div>
        </Row>
      </div>
    </>
  );
}

export default Facture;
