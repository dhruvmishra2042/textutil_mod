
import './App.css';
import Login from './Component/Login.js';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar.js';
import Alert from './Component/Alert.js';
import TextForm from './Component/Textform.js';
import About from './Component/About.js';
import Forget from './Component/Forget.js';
import Fform from './Component/Fform.js';
import React, {useState} from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom'; 

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] =  useState(null); 

  const showAlert =(message, type)=> {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    },1500); 
   
  }
  
  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success"); 
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success"); 
    }
  } 
  return (
    
    <Router>
    <Navbar title = "Trinity" mode= {mode} toggleMode={toggleMode} />
    <Alert alert={alert} mode={mode}></Alert>
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/fform' element={<Fform/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
      <Route path='/about' element={<About mode={mode}/>} / >
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
