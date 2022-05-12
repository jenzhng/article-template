import React, { useState } from 'react';
import './index.css';
import Banner from "../Banner/Banner";


const HeaderMobile = () => {
  const [replay, setReplay] = useState(true);

  const myFunction = () => {
    var x = document.getElementById("myLinks");
    if (x && x.style.display === "block") {
      x.style.display = "none";
    } else {
      if (x)
      x.style.display = "block";
    }
  } 
  
  return (
    <div className="topnav">
  <a href="/article-template/" className="active">  <Banner text="DAILY NEWS" replay={replay} />
</a>
  <div id="myLinks">
    <a href="/article-template/">Home</a>
    <a href="/article-template/#/contact">Contact</a>
    <a href="/article-template/#/about">About</a>
  </div>
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
  );
};

export default HeaderMobile;
