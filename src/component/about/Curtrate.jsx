import React from 'react'

const Curtrate = (props) => {
  return (
    <>

     <div style={{width:"100vw",height:"300px",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"20px",margin:"0px 50px"}}>

     
    <div style={{width:"400px",height:"auto",padding:"20px",border:"1px solid white"}}>

        <p style={{fontSize:"15px",textAlign:"left"}}>
            {props.comment}
       </p>

        <h3 style={{color:"#92b1e1"}}>{props.name}</h3>

    </div>

    </div>

    </>
  )
}

export default Curtrate