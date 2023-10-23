import React from 'react'
import CardList from './PostoviList';

 function Post({props}) {
  
  return ( 
    <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    </div>
  );
  





















  // const title = props.title;
  // const description = props.description;

  // return (
  //     <div>
  //       <h1>{props.title}</h1>
  //     <p>{props.description}</p>
  //     <Post title="nistaa" content="Saadržaj posta" />
  //       <div className="card-list">
  //       {props.cards.map((card) => (
  //         <div className="card">
  //          {}
  //             <img src={card.image} alt={card.title} />
  //             <h2>{card.title}</h2>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
   // );
}

export default Post