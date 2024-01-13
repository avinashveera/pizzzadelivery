import React from 'react'
import { Link } from 'react-router-dom'
import veeraimg from "../../image/veerap.jpg"
import Cvlist from './Cvlist'

const Cv = () => {
  return (
    <>
    <div className='container'>

        <aside style={{width:"30%",float:"left",height:"100%",backgroundColor:"rgba(28,32,40,255)",color:"#fff",padding:"10px 0px"}}> 

            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"200px",height:"200px",borderRadius:"50%",backgroundColor:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
             <img style={{height:"190px",width:"190px" ,borderRadius:"50%"}}  src={veeraimg} alt="profile pic" srcset="" />
            </div>
            </div>
             
             <div style={{marginTop:"50px",padding:"0px 20px"}}>
               <h5 >CONTACT</h5>
               <div style={{border:"2px solid white",lineHeight:"10px"}}></div>
               
               <ul className='contactclass' style={{marginTop:"20px"}}>
                 <li ><i class="fa-solid fa-square-phone"></i> 7991106305</li>
                 <li><i class="fa-solid fa-at"></i> avinashveera77@gamil.com</li>
                 <li><i class="fa-brands fa-internet-explorer"></i> https://veerasoftware.tech</li>
                 <li><i class="fa-sharp fa-solid fa-house-chimney"></i> Arrah,bihar</li>
               </ul>
             </div>

 
             <Cvlist 
             
             h5="SKILLS"
             listall={[
               "Html5",
               "Css","javascript","React","Mongodb","Nodejs","expressjs"
             ]}             
             />


               
             <Cvlist 
             
             h5="LANGUAGE"
             listall={[
                "Hindi","English"
             ]}             
             />



        </aside>



        <div className='sideContainer' style={{float:"right",width:"60%",padding:"10px"}}>
          <div className='heading' style={{textAlign:"center"}}>
            <h1 style={{fontWeight:"300"}}>Avinash Kumar</h1>
            <p>Mern Stack Developer</p>
          </div>
           <div>
          <h5 style={{marginTop:"20px",fontSize:"30px"}}>PROFILE</h5>
          <div style={{border:"2px solid rgba(28,32,40,255)",lineHeight:"0px",marginBottom:"20px"}}></div>
          <p style={{color:"rgba(28,32,40,255)"}}>My name is Avinash Kumar and I am a Full Stack Web Application developer. 
            I am currently doing my master in Computer Application  I am quite passionate about technologies 
            and constantly learning newer ones that are trending in the market place</p>
            </div>



            <div>
          <h5 style={{marginTop:"40px",fontSize:"30px"}}>EDUCATION</h5>
          <div style={{border:"2px solid rgba(28,32,40,255)",lineHeight:"0px",marginBottom:"20px"}}></div>
          <p style={{color:"rgba(28,32,40,255)"}}><b>10th</b>MD Carmel School</p>
          <p style={{color:"rgba(28,32,40,255)"}}><b>12th </b>HD Jain College</p>
          <p style={{color:"rgba(28,32,40,255)"}}><b>BSC Maths </b> HD Jain college</p>
        
          <p style={{color:"rgba(28,32,40,255)"}}><b>MCA 2020-23 </b>Veer Kunwar Singh University</p>
        
            </div>




            <div>
          <h5 style={{marginTop:"40px",fontSize:"30px"}}>PROJECTS</h5>
          <div style={{border:"2px solid rgba(28,32,40,255)",lineHeight:"0px",marginBottom:"20px"}}></div>
          <p style={{color:"rgba(28,32,40,255)"}}>
            
          <a style={{display:"block",textDecoration:"none",marginBottom:"15px"}} target="_blank" href="https://github.com/avinashveera"><b>https://github.com/avinashveera</b></a>
          <a style={{display:"block",textDecoration:"none",marginBottom:"15px"}} target="_blank" href="https://www.linkedin.com/in/avinashveera/"><b>https://www.linkedin.com/in/avinashveera/</b></a>
          <a style={{display:"block",textDecoration:"none",marginBottom:"15px"}} target="_blank" href="https://instagram.com/avinash_veera_1/"><b>https://instagram.com/avinash_veera_1/</b></a>
          
            </p>
            </div>


        </div>




    </div>
    </>
  )
}

export default Cv