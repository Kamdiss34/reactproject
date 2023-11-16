import React from 'react';
import Form from './components/form/Form';

import Todo from './components/Todo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Table from './components/tableau/Table';
import Home from './components/home/Home';

import './App.css';
import Sidebar1 from './components/sidebar/Sidebar1';
import Detail from './components/Detail';
import Modifier from './components/Modifier'
import Ajouter from './components/search/Form';
import Facture from './components/facture/Facture';
import Inlineform from './components/Inlineform/inlineform';

function App() {
 
  return (
    
    <Router>

      <div className="App">

        <Header />


        <div className="contenu">
          <Switch>
            <Route exact path={'/clients'}>
              <Table
                col1="Nom"
                col2="Prénoms"
                col3="Age"
                col4="Sexe"
                />
            </Route>

            <Route exact path={'/detail/:client_id'} >
              <Detail></Detail>
              </Route>

            <Route exact path={'/accueil'}  >
              <Home/>
               </Route>
            <Route exact path={'/modifier'}>

              <Modifier />

            </Route>
            <Route exact path={'/search'}>

              <Ajouter/>

            </Route>
            <Route exact path={'/ajouter'}>

<Ajouter/>

</Route>
            <Route exact path={'/vetement'}>

              <Table
              col1="Libellé"
              col2="Couleur"
              col3="Prix"
              col4="Quantite"
               />
              
              

            </Route>
            <Route exact path={'/fac'}>
              

              <Facture
              col1="Article"
              col3="Quantité"
              col2="Prix"
              col4="Total"
               />
              
              

            </Route>

          </Switch>

        </div>



      </div>

    </Router>


  );
}

export default App;
