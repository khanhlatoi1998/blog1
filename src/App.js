import './App.scss';
import Header from "./Component/Header.js" ;
import Slider from "./Component/Slider.js" ; 
import TitleContent from "./Component/TitleContent.js" ;
import Footer from "./Component/Footer.js" ;
import {useState} from "react" ;




function App() {

  const [keeped, setKeedped] = useState(false) ;

  const changeKeeped = (data) => {
    setKeedped(!keeped) ;
  } ;
  
  return (
    <div className="App">
        <Header  /> 
        <Slider changeKeeped={changeKeeped} keeped={keeped} />
        {
          keeped === false
           ? <TitleContent />
           : <></>
        } 
          
        <Footer />
    </div>
  );
}

export default App;
