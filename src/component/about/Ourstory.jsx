import React from 'react'
import Veera from "../../image/veera2.jpg"

const Ourstory = () => {

  const show=(e)=>{
    const gt=document.getElementById("showtext")
    const buttnchange=document.getElementById("buttnchange");
    const changeheight=document.getElementById("changeheight");
  
    if(gt.style.display==="none"){
    gt.style.display="inline"
    buttnchange.innerHTML="...see less"
    changeheight.style.height="800px"

  }else{
    gt.style.display="none"
    buttnchange.innerHTML="...see more"
    changeheight.style.height="600px"
  }
  //else{
  //   gt.style.display="none"
  // }

}

  return (
    <>
    
    <div id="changeheight" className='container-fluid' style={{position:"relative",width:"100%",height:"600px",paddingTop:"20px",overflow:"hidden"}}>
        <h2 style={{textAlign:"center"}}>OUR STORY</h2>

        <div className='imgsec' style={{position:"absolute"}}>
            <img style={{width:"250px",border:"5px solid #019934"}} src={Veera} alt="" srcset="" />

        </div>

        <div style={{width:"300px",position:"absolute",top:"280px",left:"50px",backgroundColor:"#019934",fontSize:"15px",color:"white",padding:"20px"}}>
            <p>
            veera software  was started in arrah. Inspired by our experiences in the industry, we decided to start our own digital agency, focused on creativity, customer service and results.
           <br/>
we started designing<span id="showtext" style={{display:"none"}}> and building websites for local companies across arrah, in many cases helping small businesses find their first foot on the digital ladder. Honesty, good value, and helpful advice that’s accessible to everyone has always been what we’re about, right from the very start.
 <br/>
Over the years, we’ve slowly and steadily expanded our services and our team of digital experts, growing to offer ecommerce, digital marketing, search and content writing, all while developing our approach to website design and development.
</span><button id="buttnchange" onClick={show} style={{border:"none",padding:"2px",background:"none",color:"#92b1e1"}}> ...see more</button> </p>
        </div>
        
    </div>
    
    </>
  )
}

export default Ourstory