// import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');

const [alert, setAlert]=useState(' ');

const showAlert=(messege, type)=>{
    setAlert({
      msg:messege,
      type:type
    })
    setTimeout(() => {
      setAlert(" ");
    }, 1500);
}
  
  const switchMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // const switchRedMode=()=>{
  //   if (mode==='light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor='red';
  //     showAlert("Red mode has been enabled", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // } 

  // const switchGreenMode=()=>{
  //   if (mode==='light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor='green';
  //     showAlert("Green mode has been enabled", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  // const switchBlueMode=()=>{
  //   if (mode==='light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor='blue';
  //     showAlert("Blue mode has been enabled", "success");
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  return (
    <>
    
        
      <Navbar title="NewTextUtils" aboutus="About Us" mode={mode} switchMode={switchMode}/>
      <Alert alert={alert}/>
      
      
      {/* <About mode={mode}/> */}
      
      
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      
        
      
   
    </>
    
  )
}

export default App;
