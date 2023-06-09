import React , {useState} from 'react'
// import Alerts from './Alerts';
// import Form from 'react-bootstrap/Form';

export default function TextForm(props) {


        const handleUpClick =() => {
          // console.log("changetoUpperchase" + text);
          let newText = text.toUpperCase();
          setText( newText);
          props.showAlert(" Converted to Upper case" , "success")
        };
        const handleLoClick =() => {
          // console.log("changetoUpperchase" + text);
          let newText = text.toLowerCase();
          setText( newText);
          props.showAlert(" Converted to Lower Case" , "success")
        };

        const handleOnChange = (event) =>{
          // console.log("change on click ");
          setText(event.target.value);

        };
        const handlecleartext = (event) =>{
        
          let newText = " ";
          setText( newText);
          props.showAlert(" All Cleared " , "warning")
        };
        const handlecopy = () =>{
          var copyText = document.getElementById("myBox");

          // Select the text field
          copyText.select();
          
        
           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText.value);
          props.showAlert(" Text Copied" , "success")
        }
        const handleExtraSpace =()=>{
           let newText = text.split(/[ ]+/);
           setText(newText.join(" "));
           
          props.showAlert(" Removed Extra Space" , "success")

        }
        
 
    const[text , setText ] = useState("");
  return (
    <>
    
      
       
        <div className=" container mb-4">

        <h1 className={`text-${props.textcolor}`}>{props.heading}</h1>
        <textarea className={`text-${props.textcolor}`} name="" id="myBox" cols="120" rows="8" value= {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white"}}></textarea>
        <br />
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
            Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
            Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handlecleartext}>
            text cleared 
        </button>
        <button className="btn btn-primary mx-3" onClick={handlecopy}>
            text Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
            Remove Extra Spaces
        </button>

        </div>

        <div className="container my-">
        <h1 className={`text-${props.textcolor}`}>Your Text Summery</h1>
        <p className={`text-${props.textcolor}`}>{text.split(" ").length} words and {text.length} characters.</p>
        <p className={`text-${props.textcolor}`}>{0.008*text.split(" ").length} Mintues to read.</p>
        <h2 className={`text-${props.textcolor}`}>Preview</h2>
        <p className={`text-${props.textcolor}`}>{ text.length>0? text:"enter something to the textbox above to preview it."}</p>
        </div>
        

       
     
     
        

       
      
    
    </>
  )
}
