import { useState } from 'react';
import Adpop from './Adpop'
import Main from './Main';

const Task = () => {
  const [pop,setPop]=useState(false);
  return(
    <>
    <div className='add'>
<button onClick={()=>setPop(true)}>Add Task</button>
<Adpop trigger={pop} setTrigger={setPop}>
   <Main/>
 </Adpop>
 </div>
    </>
  )
}

export default Task