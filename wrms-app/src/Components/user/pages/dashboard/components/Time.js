import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Time.css'

const Time = () => {
 

    const [timerHr,setTimerHr] = useState();
    const [timerMin,setTimerMin] = useState();
    const [timerSec,setTimerSec] = useState();

    let interval;

    const startTimer=()=>{

     
      const countDownDate = new Date('October 21,2022 17:00:00' ).getTime();

      interval = setInterval(()=>{
        const now = new Date().getTime();
        const distance = countDownDate - now;
        // const days = Math.floor(distance/24*60*60*1000);
        const hour = Math.floor((distance % (24*60*60*1000)) / (1000 * 60 * 60));
        const minutes =Math.floor((distance % (60*60*1000) / (1000 * 60)));
        const seconds = Math.floor ((distance % (60 * 1000)) / 1000);

        if(distance<0){
          // stop timer
          clearInterval(interval.current);
        }
        else{
          // update time
          setTimerHr(hour);
          setTimerMin(minutes);
          setTimerSec(seconds);

        }



      });
    }


    useEffect(()=>{
      startTimer();
    })


  return (
    <div className='reminder'>
      <p>Submit Todays report with in (hour)</p>
      <Link to = 'report' className='work-report'> 
        {timerHr } : {timerMin} : {timerSec}
       </Link> 
    </div>
  )
}

export default Time
