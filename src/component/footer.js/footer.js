import React from 'react'
import Contact from './Contact'
import { Location } from './Location'
import Main from './main'
import "./Footer.css"
import Services from './Services'
import Otherlink from './Otherlink'

export const Footer = () => {
  return (
    <>
<div className='container-fluid row my-3' style={{backgroundColor:"#02235b",color:"white"}}>

<div className='col-md-3 my-2'>
<p className='mx-3' style={{fontFamily:"'Helvetica",fontSize:"16px"}}>MAIN</p><  hr/>
<Main/>

</div>
<div className='col-md-3 my-2'>
<p className='mx-3' style={{fontFamily:"'Helvetica",fontSize:"16px"}}>OUR SERVICES</p><hr/>
<Services/>

</div>
<div className='col-md-3 my-2'>
<p className='mx-3' style={{fontFamily:"'Helvetica",fontSize:"16px"}}>OUR PATNERS OFFICES</p><hr/>

 <Otherlink/>
</div>


<div className='col-md-3 my-2'>
<p className='mx-3' style={{fontFamily:"'Helvetica",fontSize:"16px"}}>CONTACT US</p><hr/>
<Contact/>
<Location/>

</div>
      
    <hr/>


    <div className='container-fluid' id='footercopyright'> 
    <p style={{textAlign:"center",fontSize:"13px"}}>All © Copyrights Reserved. Website Designed & Developed by <br/> veera software  - web designing and web development company </p>
    </div>  
       

</div>
    </>
  )
}
