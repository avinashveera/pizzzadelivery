import React from 'react'
import { Link } from 'react-router-dom'
const Otherlink = () => {
  return (
    <>
    
    <ul className='footernav'>
         <li>
             <Link to='/jagdishpur'>Jagdishpur</Link>
         </li>

         <li>
             <Link to='/bihiya'>Bihiya</Link>
         </li>

         <li>
             <Link to='/piro'>Piro</Link>
         </li>

         <li>
             <Link to='/maliyabagh'>Maliyabagh</Link>
         </li>

   
             {/* i will add more text on this website */}
         
     </ul>

    </>
  )
}

export default Otherlink