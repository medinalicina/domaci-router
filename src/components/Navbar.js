import React from 'react';
import Posts from '../domaci/Post';
import Pages from '../domaci/Page';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route path='/posts' element={<Posts/>} />
      <Route path="/" element={<Pages/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
};
  


export default Navbar