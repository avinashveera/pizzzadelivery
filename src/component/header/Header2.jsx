import React from 'react'
import img3d from "../../image/3dimg.png"

const header2 = () => {
  return (
    <div className='secondHeader'>

      <div style={{height:"100%",width:"500px",maxWidth:"100%" ,padding:"20px"}} className='secondHeader1'>

        <h1 >Build, Grow And <br/> Manage Your Brand</h1>
        <p style={{color:"grey"}}>we examine your idea to develop a object roadmap with clear milestone and deliverable, detailed estimation and intractive prototype  we help you select technology stack that is best fit for your product</p>


      </div>

      <div style={{height:"100%",width:"500px",padding:"0px 20px"}} className='secondHeader2'>

          <img style={{height:"auto",width:"100%"}} src={img3d} alt="" srcset="" />

       </div>


    </div>
  )
}

export default header2