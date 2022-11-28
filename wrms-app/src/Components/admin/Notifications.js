import React from 'react'
import TopBarCss from './TopBar.module.css';

const Notifications = ({alert,email}) => {
  return (
    <>
    <div className={TopBarCss.notification}>
        <i class="fa-solid fa-bell"></i>
        <span>{alert}</span>
        </div>

        <div className={TopBarCss.notification}>
        <i class="fa-solid fa-envelope"></i>
        <span>{email}</span>

        </div>
        </>
  )
}

export default Notifications
