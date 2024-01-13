import React from 'react'
import aboutimg from "../../image/abouts.png"
const Aboutus = () => {
  return (
<>

<div className='container-fluid row'>

    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"10px",marginTop:"10px"}} className='col-md-6'>

        <h1 style={{color:"rgb(1, 153, 52)"}} >web design and devlopment in arrah</h1>

        <p style={{margin:"10px 50px",color:"gray"}}>
        We are a leading Web development company that offers top-rated 
        software development services leveraging our vast experience,
         team of skilled professionals, key business insights, and a dedicated working process.
        </p>



    </div>


    {/* nothing to comment */}


    <div className='col-md-6'>

        <img style={{height:"300px",width:"300px",marginLeft:"10px"}} src={aboutimg} alt="" srcset="" />

</div>

</div>

</>
  )
}

export default Aboutus