import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function About() {
    const[myStyle ,setmyStyle] = useState( {
        color : "black",
        backgroundColor: "white"
    })
    const[btnText , setBtnText] = useState("Enable Dark mode")
    const toggleStyle =()=>{
        if(myStyle.color === "black"){
            setmyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setBtnText("enable light mode")
            
        }
        else{
            setmyStyle({
                color : "black",
                backgroundColor: "white"

            })
            setBtnText("enable dark mode")
        }
    }
  return (
   
    <>
    <div className="conatiner" style={myStyle}>
        <h1 className='my-2'>About Us</h1>
    
    <Accordion defaultActiveKey="0" style={myStyle}>
    <Accordion.Item eventKey="0" style={myStyle}>
      <Accordion.Header >Accordion Item #1</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1"style={myStyle} >
      <Accordion.Header >Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item >
    <Accordion.Item eventKey="2 " style={myStyle}>
      <Accordion.Header >Accordion Item #3</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <div className="container my-3 ">
   
    <button type = "button" onClick={toggleStyle} className='btn btn-primary '>{btnText}</button>

    </div>
    
  </Accordion>
  </div></>
  )
}
