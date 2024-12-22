
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"


function App() {
  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState();

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(Mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success")
      // document.title="TextUtils-Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      // document.title="TextUtils- Light Mode"
    }
  };

  return (
    <>
    <Router>
    <Alert alert={alert}/>
  <NavBar title="TextUtils" aboutText="About Us" hometext="Home" mode={Mode} toggleMode={toggleMode} key={new Date()}/>
   <div className="container my-3">
   {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} /> */}
   <Routes>
       <Route path="/about" element={<About mode={Mode}/>}/>
       <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode} />} />
   </Routes>
    </div>
  
  </Router>
  </>
  );
}

export default App;
