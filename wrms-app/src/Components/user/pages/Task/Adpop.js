
import React from 'react'
import './Adpop.css'
const Adpop1 = (props) => {
    return (props.trigger)?(
    <div className="popup1">
    <div className='popup-inner1'>
 {props.children}
 <i onClick={()=>props.setTrigger(false)} class="fa-solid fa-xmark"></i>
    </div>
  
</div>
  ):"";
}

export default Adpop1