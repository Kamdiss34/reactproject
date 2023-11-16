// Inlineform.js
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './inlineform.css';

function Inlineform({ onSubmit }) {
  const [article, setArticle] = useState('');
  const [prix, setPrix] = useState('');
  const [quantite, setQuantite] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    updateTotal(prix, quantite);
  }, [prix, quantite]);

  const handlePrixChange = (e) => {
    const newPrix = e.target.value;
    setPrix(newPrix);
  };

  const handleQuantiteChange = (e) => {
    const newQuantite = e.target.value;
    setQuantite(newQuantite);
  };

  const updateTotal = (newPrix, newQuantite) => {
    const newTotal = (parseFloat(newPrix) || 0) * (parseInt(newQuantite) || 0);
    setTotal(newTotal.toFixed(2));
  };

  const handleAjouter = () => {
    onSubmit({ article, prix, quantite, total });
    setArticle('');
    setPrix('');
    setQuantite('');
    setTotal('');
  };

  return (
    <Form id="form">
      <Row className="align-items-center">
        <Col >
          <Form.Label class="col-1"  visuallyHidden>
            Article
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              id="articleInput"
              placeholder="Article"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col >
          <Form.Label class="col-1"  visuallyHidden>
            Prix
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              id="prixInput"
              placeholder="Prix"
              value={prix}
              onChange={handlePrixChange}
            />
          </InputGroup>
        </Col>
        <Col >
          <Form.Label class="col-1"  visuallyHidden>
            Quantité
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control
              id="quantiteInput"
              placeholder="Quantité"
              value={quantite}
              onChange={handleQuantiteChange}
            />
          </InputGroup>
        </Col>
        <Col  class="col-1">
          <Form.Label  class="col-1" visuallyHidden>
            Total
          </Form.Label>
          <InputGroup className="mb-2">
            <Form.Control id="totalInput" value={total} readOnly />
          </InputGroup>
        </Col>
        
        <Col  class="col-1 ">
          <Button type="button" onClick={handleAjouter} className="mb-2 btn btn-success">
           Ajouter
          </Button>
        </Col>
      </Row>
    </Form> 
  );
}

export default Inlineform;
