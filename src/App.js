import TextForm from './components/TextForm';
// import About from './components/About';
import Navg from './components/Navg';
import { useState } from 'react';
// import Alerts from './components/Alerts'
// import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

function App() {
  const [mode,  setMode] = useState("light");
  const [textcolor, setTextcolor] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=> {

    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);


  }


  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      setTextcolor("light")
      document.body.style.backgroundColor ="#042743";
      showAlert(" Dark mode has been enabled", "success")
    }else{
      setMode("light")
      setTextcolor("dark")
      document.body.style.backgroundColor ="white";
      showAlert(" Light mode has been enabled", "success")
    }
  }

  return (
    <>
    
    <Navg title = "UtilText" aboutText = "About Us" mode={mode} toggleMode = {toggleMode} textcolor={textcolor}/>
    <Alerts alert = {alert}/>
    <div className="container my-3">
    <TextForm heading = "Enter The Text To Analyze" mode = {mode} textcolor={textcolor} showAlert= {showAlert}/>
    {/* <About/> */}

    </div>
    
    
   
    </>
  );
}

export default App;
