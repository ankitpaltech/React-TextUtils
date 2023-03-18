import TextForm from './components/TextForm';
import About from './components/About';
import Navg from './components/Navg';
import { useState } from 'react';
// import TextForm from './components/TextForm';

function App() {
  const [mode,  setMode] = useState("light");
  const [textcolor, setTextcolor] = useState("dark");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      setTextcolor("light")
      document.body.style.backgroundColor ="#042743";
    }else{
      setMode("light")
      setTextcolor("dark")
      document.body.style.backgroundColor ="white";
    }
  }
  return (
    <>
    
    <Navg title = "UtilText" aboutText = "About Us" mode={mode} toggleMode = {toggleMode} textcolor={textcolor}/>
    <div className="container my-3">
    <TextForm heading = "Enter The Text To Analyze" mode = {mode} textcolor={textcolor}/>
    {/* <About/> */}

    </div>
    
    
   
    </>
  );
}

export default App;
