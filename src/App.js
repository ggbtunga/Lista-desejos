import { useEffect, useState} from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import './Page.css'
import products from './products/products';


export default function App() {

  const [figures,setFigures] = useState([])

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

