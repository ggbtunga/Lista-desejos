import React from "react";
import { useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import '../Page.css'
import products from '../products/products';

export default function Main() {

    const [figures,setFigures] = useState([]);
  
    useEffect(()=>{
      
      setFigures(products.createCardsFromFigures())
  
    },[]);
  
  
    return (
        <div className="page">
          <Nav/>
          <Body figures={figures}/>
        </div>
    );
  }