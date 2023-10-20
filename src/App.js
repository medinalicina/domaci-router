import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Posts from './domaci/Post';
import Pages from './domaci/Page';
import './style.css';
// import React, { useState } from "react";


function App() {
  return (
    <div className="App">
    {/* <BrowserRouter> */}
    <Navbar />
  
    {/* <Routes>
      <Route path='/posts' element={<Posts/>} />
      <Route path="/pages" element={<Pages/>} />
    </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
