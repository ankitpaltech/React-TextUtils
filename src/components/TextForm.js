import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TextForm(props) {
    const handleUpClick =() => {
        // console.log("changetoUpperchase" + text);
        let newText = text.toUpperCase();
        setText( newText)
    };
    const handleOnChange = (event) =>{
        // console.log("change on click ");
        setText(event.target.value);

    };
    const[text , setText ] = useState("Enter the text ");
  return (
    <>
    <Form>
      <fieldset>
        <h1>{props.heading}</h1>
        <Form.Group className="mb-3">
          
        <Form.Control id="myBox" value= {text} onChange = {handleOnChange} rows = "8"/>
        </Form.Group>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
            Convert To UpperCase
        </button>

        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
    </>
  )
}
