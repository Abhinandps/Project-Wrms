import React from 'react'
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/" className="button">Back To Home</Link>
    </div>
  )
}

export default NotFound
