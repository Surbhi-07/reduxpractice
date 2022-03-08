import React from 'react'
import Navbar from './Navbar/Navbar' 
import Home from './Component/Home'
import Calculator from './Component/Calculator'
import DealApi from './Component/DealApi'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App(){
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/home" element={<Home />} />
          <Route path ="/calculator" element ={<Calculator />} />
          <Route path ="/DealApi" element ={<DealApi />} />
         
        </Routes>
      </Router>
    </div>
  )
}
export default App