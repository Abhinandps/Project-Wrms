import React, { useEffect, useRef, useState } from 'react'
import Notifications from './Notifications';
import TopBarCss from './TopBar.module.css';


import './Topbar.css'
import { Link } from 'react-router-dom';


const TopBar = ({data}) => {

  // this state is used to open and close profile icon settings
    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(()=>{
      let handler = (e) =>{
        if(!menuRef.current.contains(e.target)){
            setOpen(false);
        }

      };

      document.addEventListener("mousedown",handler);


      return()=>{
      document.removeEventListener("mouseup",handler);
      }
    });


  return (
    <div className={TopBarCss.topbar}>
      <div className={TopBarCss.navigate}>
        <p>{ data ? data : 'Dashboard'}</p>
      </div>
      <div className={TopBarCss.right}>

        <Notifications alert="1" email="2" />

        <div className={TopBarCss.profile}>
            <img style={{cursor:"pointer"}} onClick={()=>{setOpen(!open)}} width="40" src="https://picsum.photos/200" alt="" />
        </div>

        {/* <div className={TopBarCss.logout}>
        <i class="fa-solid fa-gear"></i>
        </div> */}

      </div>

      <div  ref={menuRef}  className={`dropdownMenu ${open ? 'slide' : 'inactive'}`}>
        
          <DropdownItem icon={"fa-solid fa-user"} text = {"My Profile"} />
          <DropdownItem color={"red"} icon={"fa-solid fa-power-off"} text = {"Sign out"} />
       
         
      </div>

    </div>

    

  )
}

const DropdownItem = (props) =>{
    return(
        <span className="dropdownItem">
          <Link className="link" >
          <i style={{color:props.color}} className={props.icon}></i>
            <p style={{color:props.color}} >{props.text}</p>
          </Link>
        </span>
    )
}

export default TopBar
