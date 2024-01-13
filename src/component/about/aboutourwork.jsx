import React,{useEffect,useState} from 'react'
import Crd from "./Curtrate"

const Aboutourwork = () => {

  const [data,setData]=useState([]);


  useEffect(() => {
    fetch('https://veerasoft.herokuapp.com/api/comments')
    .then( res => res.json())
    .then( data => {
        setData(data)
    })
  }, []);


 

  return (
    <>


  
    <div className='container-fluid' style={{backgroundColor: "#019934",color:"white",height:"auto",paddingTop:"5px"}} >

        <h1 style={{textTransform:"uppercase" ,marginTop:"20px",textAlign:"center"}}>What our customers say about us</h1> 
     
   <div className='hideschroll' style={{display:"flex",overflowX:"scroll"}}>


   {
    data.map((comm)=>{
    return  <Crd
     name={comm.name}
     comment={comm.comment}
     />
    })

  }


  </div>


     </div>

    </>
  )
}

export default Aboutourwork