import React from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '../domaci/Post';
import About from '../domaci/AboutUs';

function Navbar() {
  return (
<BrowserRouter>
        <Routes>
    <div>
      <Link to="/">
      <button on onClick={() => ("navbar")}><img src="logo.jpg" alt="Logo" id="logo" /></button>
      </Link>
      <div className='drugideo'>
        <ul>
          <li>
            <Link to="/about">
              <button onClick={() => ("./AboutUs")}></button>
            </Link>
          </li>
          <li>
            <Link to="/post">
              <button on onClick={() => ("./post")}>Post</button></Link>
          </li>
        </ul>
      </div>
    </div>
    </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
































// import React from 'react';
// import Posts from '../domaci/Post';
// import Pages from '../domaci/Products';
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


// function Header() {
//   return (
//     <header>
      
//       <nav>
//         <ul>
//           <li><a href="/about">About</a></li>
//           <li><a href="/posts">Posts</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

  


