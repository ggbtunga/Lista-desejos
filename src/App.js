import { useEffect} from 'react';
import Nav from './components/Nav';
import Body from './components/Body';
// import Home from './Home'
import './Page.css'
import products from './products/products';

document.onload = App;

function App() {

  // const [figures,setFigures] = useState([]);

  useEffect(()=>{
    
    products.createCardsFromFigures()

  },[])

  console.log(products.figures)

  return (
    <div className="page">
      <Nav/>
      <Body figures={products.figures}></Body>

    </div>

  );
}

export default App;
