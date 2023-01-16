import React from "react";
import { useEffect, useState} from 'react';
import Nav from './Nav';
import Body from './Body';
import '../Page.css'
import products from '../products/products';
import { legacy_createStore } from "redux";
import carrinhoReducer from "../reducers/carrinhoReducer";
import { Provider } from "react-redux";

export default function Main() {

    const store = legacy_createStore(carrinhoReducer)

    const [figures,setFigures] = useState([]);
  
    useEffect(()=>{
      
      setFigures(products.createCardsFromFigures())
  
    },[]);
  
  
    return (
        <div className="page">
          <Provider store={store}>
            <Nav/>
            <Body figures={figures}/>
          </Provider>
        </div>
    );
  }