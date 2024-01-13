
const featopt=(props)=>{



return <>

<div className='fecsec1 col-md-4' style={{padding:"50px",color:"#fff"}}>
<div style={{borderRadius:"10px",background:"#03235C",width:"100%",height:"100%",padding:"10px 0px"}}>
<h3 style={{paddingTop:"20px"}}>{props.type}</h3>

<h5>Pricing</h5>
<p style={{marginBottom:"20px",fontSize:"30px"}}>Rs. {props.price}/</p>

{
props.feature.map((arr)=>{
    return(<>
    <p>{arr}</p>
    </>)
})
}


<a href="/">
  <button style={{padding:"6px 20px",backgroundColor:"rgb(1, 153, 52)",border:"none",color:"white",paddingBottom:"10px",borderRadius:"10px"}}>see demo</button>
</a>
</div>
</div>
</>
}

export default featopt;
