import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
    
    <ul className='footernav'>
         <li>
             <Link to='/website-services'>Website Services</Link>
         </li>

         <li>
             <Link to='/digtalmarketing'>Digital Marketing</Link>
         </li>

         <li>
             <Link to='/softwareservices'>Software Services</Link>
         </li>

         
     </ul>

    </>
  )
}

export default Services