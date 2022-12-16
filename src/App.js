import { useEffect} from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
import './Page.css'
import products from './products/products';
// import FigureElement from './components/FigureElement';


function App() {


  useEffect(()=>{
    
    products.createCardsFromFigures()

  },[])

  console.log(products.figures)

  return (

    <div className="page">
      <Nav/>
      <Body figures={products.figures}/>
    </div>


  );
}

export default App;
