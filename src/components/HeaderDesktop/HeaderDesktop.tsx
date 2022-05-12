import React, {useState} from "react";
import Banner from "../Banner/Banner";
import './index.css';


const HeaderDesktop = () => {
  const [replay, setReplay] = useState(true);

  return (
        <>
     <a href="/article-template/" className="active"> <Banner text="DAILY NEWS" replay={replay} /></a>

    <nav className="navigation desktop">
            <ul className="navigation-list">
              <li className="navigation-list--item">
                <a href='/article-template/'>HOME</a>

              </li>
            
              <li className="navigation-list--item">
              <a href='/article-template/#/contact'>CONTACT</a>
              </li>
              <li className="navigation-list--item">
              <a href='/article-template/#/about'>ABOUT</a>
              </li>
              
            </ul>
          </nav> 
          </>
  );
};

export default HeaderDesktop;
