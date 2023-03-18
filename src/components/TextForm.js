import React , {useState} from 'react'

import Form from 'react-bootstrap/Form';

export default function TextForm(props) {


        const handleUpClick =() => {
          // console.log("changetoUpperchase" + text);
          let newText = text.toUpperCase();
          setText( newText);
        };
        const handleLoClick =() => {
          // console.log("changetoUpperchase" + text);
          let newText = text.toLowerCase();
          setText( newText);
        };

        const handleOnChange = (event) =>{
          // console.log("change on click ");
          setText(event.target.value);

        };
        const handlecleartext = (event) =>{
        
          let newText = " ";
          setText( newText);
        };
        const handlecopy =()=>{
          var text1 = document.getElementById("myBox");
          text1.Select();
          navigator.clipboard.writeText(text1.value);
        }
        const handleExtraSpace =()=>{
           var newText = text.split(/[]+/);
           setText(newText.join(" "));

        }
        
 
    const[text , setText ] = useState("");
  return (
    <>
    
      
       
        <div className=" container mb-3">

        <h1>{props.heading}</h1>
        <textarea name="" id="myBox" cols="120" rows="8" value= {text} onChange = {handleOnChange}></textarea>
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

        <div className="container my-3">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} Mintues to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        

       
     
     
        

       
      
    
    </>
  )
}
