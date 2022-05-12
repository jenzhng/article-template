import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HashRouter, NavLink, useParams } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import HeaderDesktop from "./components/HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import NotFound from "./components/NotFound/NotFound";
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

  const [windowWidth, setWindowSize] = useState(window.innerWidth)
  const handleWindowResize = useCallback((event: any) => {

    setWindowSize(window.innerWidth);

}, []); 
  

useEffect(() => {
  const loadArticleData = async() => {
    await fetch(`article_data.json`)
    .then(res => res.json())
    .then(result => {
	
     setData(result.articles);
	 
   }); 
  }
  loadArticleData();

  window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

}, [handleWindowResize]);




  return (
    <>
    
    {windowWidth > 650 ? <HeaderDesktop/> : <HeaderMobile/>}    
      
           
          <div>
        <Routes>
        <Route index element={<Home artData={articleData}/>} />
         
          <Route path="articles-:id" element={<Article artData={articleData}/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
		      <Route path="*" element={<NotFound/>} />
        </Routes>
       
          </div>

          <Footer/>
          </>
  );
}

export default App;

