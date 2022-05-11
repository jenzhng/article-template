import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, NavLink, useParams } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

interface allData {
	basic_info: {header: string;
    description: string;
    section_name: string[];
  };
  projects: aData;
}

interface aData {
  title: string;
  author: string;
  Date: string;
  description: string;
  images: string[];
  content: string;

}






const App= () => {
  const { id } = useParams();
  const [replay, setReplay] = useState(true);
  const [articleData, setData] = useState<allData[]>([]);

  

useEffect(() => {
  const loadArticleData = async() => {
    await fetch(`article_data.json`)
    .then(res => res.json())
    .then(result => {
	
     setData(result.articles);
	 
   }); 
  }


  loadArticleData();

}, []);

  return (
    <>
    <Banner text="DAILY NEWS" replay={replay} />
      <nav className="navigation desktop">
            <ul className="navigation-list">
              <li className="navigation-list--item">
                <a href='/'>HOME</a>

              </li>
            
              <li className="navigation-list--item">
              <a href='./contact'>CONTACT</a>
              </li>
              <li className="navigation-list--item">
              <a href='about'>ABOUT</a>
              </li>
              
            </ul>
          </nav> 
           
          <div>
        <Routes>

          <Route index element={<Home artData={articleData}/>} />
          <Route path="articles-:id" element={<Article artData={articleData}/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />

        </Routes>
       
          </div>

          <Footer/>
          </>
  );
}

export default App;

