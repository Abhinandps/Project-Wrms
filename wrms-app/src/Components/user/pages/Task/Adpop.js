
import React from 'react'
import './Adpop.css'
const Adpop1 = (props) => {
    return (props.trigger)?(
    <div className="popup1">
    <div className='popup-inner1'>
 {props.children}
 <button className='close-btn1'onClick={()=>props.setTrigger(false)}>close</button>

    </div>
  
</div>
  ):"";
}

export default Adpop1