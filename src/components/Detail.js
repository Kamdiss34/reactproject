import React from "react";
import "./detail.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import data from "../data.json";


function Detail() {


  const { client_id } = useParams();
  console.log({ client_id });
 

  return (
    <>

<div>
 <h2 >l'id est {client_id}</h2>
</div>

     
      
      
    </>
    

  );
}

export default Detail;
