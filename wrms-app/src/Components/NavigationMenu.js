import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import NavMenuCss from "./NavigationMenu.module.css";
import { NavData } from './NavData';
import './NavigationMenu.css';

function NavigationMenu({setNavdata,Data}) {

  console.log(Data);
 

   // this state is used to toogle the side bar 
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

  return (
    <div style={{width: isOpen ? "250px" : "70px"}} className={NavMenuCss.nav_menu}> 

    {/* header  of nav bar  */}
      <div  className={NavMenuCss.header}>
        {/* Logo  */}
        <a  href="#">
            <h2 className='logo'>W</h2>
            <h2 style={{display: isOpen ? "block" : "none" }} >Logo</h2>
        </a>

        {/* Navigaton Bar  */}
        <i id="sidebar" style={{marginRight: isOpen ? '' : '25px'}}  onClick={toggle} class="fa-solid fa-bars"></i>

      </div>

      {/* navigation menu list  */}
      <div className={NavMenuCss.section}>
        <ul>
            {
                Data.map((item,index)=>{
                    return(
                        <li>
                            <NavLink 
                            onClick={()=>{setNavdata(item.title)}}
                             key={index} to={item.path} className={NavMenuCss.link}
                            activeClassName={({isActive})=> isActive ? 'active' : ''}
                            >
                                <i  style={{ margin: isOpen ? '0 0 0 20px' : '0 0 0 -10px' }} className={item.icon}></i>
                                <span  style={{display: isOpen ? 'block' : 'none', animation: isOpen ? 'fade-in 0.5s linear' : 'fade-in 0.5s linear'}} >{item.title}</span>
                                </NavLink>
                        </li>
                    )
                })
            }
        </ul>
      </div>


      {/* Footer section  */}
      <div className={NavMenuCss.footer}>
        <div style={{flexDirection: isOpen ? 'row' : 'column'}} className={NavMenuCss.social_media}>
            <a href="#"><i class="fa-brands fa-square-facebook"></i>  </a>
            <a href="#"><i class="fa-brands fa-instagram"></i>  </a>
            <a href="#"><i class="fa-brands fa-twitter"></i>  </a>

        </div>
        <div style={
            { display : isOpen ? 'block' : 'none'
            }} className={NavMenuCss.content}>
            <strong>&copy;copyright 2022</strong>
            <p>Concept Created By Unit2</p>
        </div>
      </div>

    </div>
  )
}

export default NavigationMenu
