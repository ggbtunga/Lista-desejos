import { useEffect, useState,useRef} from 'react';
import Nav from './components/Nav';
// import Body from './components/Body';
import './Page.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight,faCartShopping  } from "@fortawesome/free-solid-svg-icons";
import products from './products/products';


export default function App() {

  const [figures,setFigures] = useState([]);
  const carousel = useRef(null);

  useEffect(()=>{
    
    setFigures(products.createCardsFromFigures())

  },[]);

  const handleLeftClick = (e)=>{
    e.preventDefault()
    carousel.current.scrollLeft-=carousel.current.offsetWidth
  }
  const handleRightClick = (e)=>{
    e.preventDefault()
    carousel.current.scrollLeft+=carousel.current.offsetWidth
  }

  return (

    <div className="page">
      <Nav/>
      <div className="container" ref={carousel}>
            {figures.map(figure=>
                <div className="cardItem" key={figure.id}>
                    <img src={`assets/${figure.icon}.jpg`} 
                        alt={figure.icon}>
                    </img>
                    <div className="cardItem-desc">
                        <h1>{`Action Figure ${figure.icon}`}</h1>
                        <FontAwesomeIcon icon={faCartShopping} className="figureCart"/>
                    </div>
                </div>
            )}    
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button onClick={handleRightClick}><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
    </div>


  );
}

