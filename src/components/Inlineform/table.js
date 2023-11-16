import Button from 'react-bootstrap/Button';
import React from "react";
import "./table.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import data from "../../data.json";
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillPencilFill, BsFillTrashFill, BsFillEyeFill } from 'react-icons/bs';


function Table(props) {
    return (



        <>
            <Link to="/ajouter">
                <button id="ajouter" class="btn btn-primary">Ajouter</button>
            </Link>
            <div>


                <table class="table table-success table-striped  " id="tables">
                    <thead>
                        <tr>
                            <th>{props.col1}</th>
                            <th>{props.col2}</th>
                            <th>{props.col3} </th>
                            <th>{props.col4}</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.clients.map((client) => (
                                <tr key={client.client_id}>

                                    <td class="table-user">

                                        {client.nom}
                                    </td>
                                    <td>{client.prenom}</td>
                                    <td>{client.age}</td>
                                    <td>{client.sexe}</td>
                                    <td class="table-action">
                                        <Link class='me-2' to='/detail/${client_id}' ><BsFillEyeFill /></Link>
                                        <Link class='me-2' to='/modifier/'> <BsFillPencilFill /></Link>
                                        <Link class='me-2' to='/'><BsFillTrashFill id="sup" /></Link>
                                    </td>
                                </tr>

                            ))

                        }











                    </tbody>
                </table>
            </div>
        </>

    );
}

export default Table;