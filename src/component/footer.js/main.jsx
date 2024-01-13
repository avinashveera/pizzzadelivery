import React from 'react'
import { Link } from 'react-router-dom'

const main = () => {
  return (
    <>
    
    
     <ul className='footernav'>
         <li>
             <Link to='/'>Home</Link>
         </li>

         <li>
             <Link to='/about'>About</Link>
         </li>

         <li>
             <Link to='/services'>Services</Link>
         </li>
         
     </ul>

    </>
  )
}

export default main