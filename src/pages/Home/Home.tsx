import React from 'react';
import './index.css';



const Home = ({artData}:	any) => {
  
  return (
   <>
          <div id='box'>

{artData.map((data:any, key:string) => {
  var link = "/article-template/#/articles-" + key;
return (

<li key={key} >
  <a href={link}><div><img  src={data.images[0]}/></div>
  <div className="title" >{data.title}</div></a>
  <div className="description">{data.description}</div>
  
  <div className="author">{data.author}</div>
  
  </li>

);
})}
          </div>
   </>
  );
}

export default Home;
