
import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText]= useState('');

  const handleUprCase=()=>{
    //console.log("uppercase btn clicked");
    setText(text.toUpperCase());
    props.showAlert(" Uppercase has been enabled", "success");
  }

  const handleLwrCase=()=>{
    //console.log("uppercase btn clicked");
    setText(text.toLowerCase());
    props.showAlert("lowercase has been enabled", "success");
  }
  const handleClearText=()=>{
    //console.log("uppercase btn clicked");
    setText(" ");
    props.showAlert("Text Cleared", "success");
  }

  const handleCopy=()=>{
    let txt=document.getElementById('exampleFormControlTextarea1');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied", "success");
  }

//   const reset=()=>{
//     if (setText=" ") {
// {text.length}=0;
//     }
//   }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

const handleOnChange =(e)=>{
  //console.log('On Change');
 setText(e.target.value);
}
  
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<div className="mb-3">
  <label htmlfor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1>  </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="12" style={{backgroundColor:props.mode==='dark' ? 'rgb(137 147 147)':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} placeholder='Enter text'></textarea>
  <button className="btn btn-primary my-2" onClick={handleUprCase}>Change to UPPERCASE</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleLwrCase}>Change to lowercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
  <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
  <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
</div>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>Words:{text.split(" ").filter((element)=>{return element.length!==0}).length} Characters:{text.length}</p>
      <p>Minutes to read:{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text"}</p>
    </div>
    </>
  )
}
