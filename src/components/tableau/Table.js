
import React from "react";
import "./table.css";

function    Table() {
  return (



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

);
}

export default Table;