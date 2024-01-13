import React from 'react';
import webdev from "../../image/bluebg.jpg"
//import Onepage from "./Onepage"
import Featopt from "./featopt"

const Features = () => {
  return (
    <>
    
    <div className='container-fluid'>
        <h1 style={{color:"rgb(1, 153, 52)",textAlign:"center"}}>Our Features & Services</h1>

        <div className=''>

        <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img style={{width:"300px",height:"300px",borderRadius:"50%"}} src={webdev} alt="" />
         <p  style={{position:"absolute",top:"0" ,textAlign:"center",transform:"translateY(50%)"}}><span style={{backgroundColor:"yellow",padding:"5px",fontWeight:"bold",fontSize:"25px"}}>WEB</span> <span style={{display:"block",backgroundColor:"black",color:"white",padding:"5px",fontWeight:"bold",fontSize:"25px"}}> DEVLOPMENT </span><span style={{display:"block",backgroundColor:"white",padding:"5px",fontWeight:"bold",fontSize:"25px"}}>SERVICES</span></p>
        </div>
         
      
          </div>




 <div className='featuresec row'>


<Featopt 
type="Landing website"
price="999"
feature={["responsive design","3 pages","home" ,"about","service"]}

/>


<Featopt 
type="Multipage"
price="2000"
feature={["responsive design","bootstrap5","5 pages website","social media icon",]}

/>


<Featopt 
type="Ecommerce website"
price="5000"
feature={["responsive design","multipages","social media icon","dashboard","backend","database"]}

/>





</div>


    </div>
    
 


    </>
  )
}

export default Features