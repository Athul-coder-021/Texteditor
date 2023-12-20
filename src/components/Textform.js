import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState("");
// text = "new text";//Wrong way to change the state
// setText("new text"); Correct way to change the state

const handleOnChange = (event)=>
{
    // console.log("On change");
    setText(event.target.value);
}

const handleUpClick = ()=>{
    // console.log("UpperCase was clicked");
    let newState = text.toUpperCase();
    setText(newState);
}
const handleLoClick = ()=>{
    // console.log("UpperCase was clicked");
    let newState = text.toLowerCase();
    setText(newState);
}
const handleClearClick = ()=>{
    // console.log("UpperCase was clicked");
    setText("");
}
const copyToClipboard = ()=>{
    navigator.clipboard.writeText(text);
}
const remove = ()=>{
     setText(text.split(/[ ]+/).join(" "));
}


  return (
<>
    <div className="container">
        <div className="mb-3">
        <h1>Enter your Email Id</h1>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
    
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-success" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-success mx-2" onClick={copyToClipboard} >Copy to Clipboard</button>
        <button className="btn btn-success mx-2" onClick={remove} >Format Content</button>
    </div>
    
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length*0.008} Minutes read time minimum required</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</>
  )
}
