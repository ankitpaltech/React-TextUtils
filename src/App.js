import TextForm from './components/TextForm';
import About from './components/About';
import Navg from './components/Navg';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
    <Navg title = "UtilText" aboutText = "About Us"/>
    <div className="container my-3">
    <TextForm heading = "Enter The Text To Analyze"/>
    {/* <About/> */}

    </div>
    
    
   
    </>
  );
}

export default App;
