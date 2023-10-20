import React from 'react';
import { useNavigate } from 'react-router-dom';

function Page() {
const navigate = useNavigate();
  return (
    <div style = {{display: 'flex', gap: '30px', justifyContent: 'right', marginRight: '50px'}}>
     <button onClick={()=> navigate("/posts")}>POSTS</button>
     <button onClick={() => navigate("/")}>PAGE</button>
    </div>
  )
}

export default Page