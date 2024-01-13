import React from 'react'
import Aboutourwork from './aboutourwork'
import Aboutus from './aboutus'
import Choose from './choose'
import Ourstory from './Ourstory'
import ("./about.css")

const About = () => {
  return (
    <>
    
     <div className='container-fluid' style={{overflow:"hidden"}}>

       <div className='aboutheading'> 
        <div className='aboutoverly'>

        <h3 style={{textAlign:"center",textTransform:"uppercase",lineHeight:"50px"}}>About us</h3>

        </div>
       </div>
       
         
        
 
       <Aboutus/>

       <Choose/>
       <Aboutourwork/>   
       <Ourstory/>  
       </div> 
      
    </>
  )
}

export default About