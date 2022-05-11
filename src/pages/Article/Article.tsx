import React from 'react';
import { Route, useParams } from "react-router-dom";
import './index.css';




const Article = ({artData}:any) => {
  const { id } = useParams();
  

  const getFormattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toDateString();
}
  return (
   <>
 <div id='container'>


 {artData.map((data:any, key:string) => {

if (key == id) {
  var link = "./article-" + key;
  var mydate = new Date(data.date);
console.log(mydate.toDateString());
return (

<li key={key} >
  <div><img  src={data.images[0]}></img></div>
  <div className="title">{data.title}</div>
  <div className="author">{data.author}</div>  
  <div className="date">{getFormattedDate(data.date)}</div>
  <div className="description" style={{whiteSpace: 'pre-line'}}>{data.content}</div>
  
  
  
  </li>

);
}
})} 

</div>

   
   </>
  );
}

export default Article;
