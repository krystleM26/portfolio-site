import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import astronautHelmet from '../assets/astronaut-helmet.png'
import deadEye from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import blog from '../assets/blog.png'
import "../styles/nav.css"

export default function Nav() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }


    const getNavPositionClass = () => {
        switch (location.pathname){
            case "/":
              return "nav-about";
            case "/skills":
              return "nav-skills";
              case "/projects":
              return "nav-projects";
            case "/contact":
              return "nav-contact";
            case "/blog":
              return "nav-blog"
            default:
              return "";
        }
    };

    // const getPageTitle = () => {
    //     switch (location.pathname){
    //         case "/":
    //           return "ABOUT";
    //         case "/skills":
    //           return "SKILLS";
    //         case "/projects":
    //           return "PROJECTS";
    //         case  "/BlOG":
    //           return "BLOG";
    //         case "/contact":
    //           return "CONTACT";
    //         default:
    //           return "";
    //     }

    // }

    const navPositionClass = getNavPositionClass()
    // const pageTitle = getPageTitle()

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    }
    
    const renderNavLink = (to, imgSrc, altText, navClass) => {
      const isCurrent = isCurrentPage(navClass)
      const linkClass = isCurrent ? "nav-link current" :
      "nav-link";
      return (
        <Link to={to} className={linkClass}>
          <img src={imgSrc} alt={altText} />
        </Link>
      )
    }
   
  

 return (
    <nav className={`nav $(navPositionClass)`}>
      <button onClick={toggleMenu} className='menu-toggle'>
        {menuOpen ? "✖" : "☰"}
      </button>
     
       
       <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

         {renderNavLink(
              "/",
              astronautHelmet,
              "astronaut helmet icon",
              "nav-about"
          )}
          {renderNavLink(
              "/skills",
              deadEye,
              "deadEye icon",
              "nav-skills"
          )}
          {renderNavLink(
              "/projects",
              stack,
              "stack icon",
              "nav-projects"
          )}
          {renderNavLink(
              "/contact",
              envelope,
              "envelope icon",
              "nav-contact"
          )}
          {renderNavLink(
              "/blog",
              blog,
              "blog icon",
              "nav-blog"
          )}
       </div>
      
    </nav>
 )
  
}
