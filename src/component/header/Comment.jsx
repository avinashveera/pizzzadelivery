import React ,{useState}from 'react'
import "./header.css";
import swal from 'sweetalert';

const Comment = (props) => {

  const [rating,setRating]=useState("");
  const [usercomment,setusercomment]=useState("");


  const handlechange= (e)=>{

    setRating(e.target.value)
  
  }

  const handlechange1=(e)=>{

    setusercomment(e.target.value)
  
  }
  const submithandle=async (e)=>{

    if(rating.length>=4&& usercomment.length>=10){


    const data={
      "name":rating,
      "comment":usercomment
    }

    await fetch("https://veerasoft.herokuapp.com/api/comment",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data),
 
      }).then(res=>{

      }).catch
      ((err)=>{
        console.log(err)
      })

      props.hidefc();

      swal("Thank You", "your feedback is submitted!", "success");

      setRating("")
      setusercomment("")
    }else{
      swal("invalid", "enter a valid inout", "warning");
    }
    
    }

  return (
    <>
    
    <div className='container-fluid' >

        <div className='cust-container'>
        <div className='cust-cont-in' style={{height:"400px",display:"flex",alignItems:"center"}}>

        
        <i onClick={props.hidefc} style={{color:"white",fontSize:"30px",position:"absolute",right:"20px",top:"20px" ,padding:"10px"}}  class="fa-regular fa-circle-xmark"></i>

            <form style={{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                  
                    <input name='user' onChange={handlechange} value={rating} style={{width:"250px",height:"30px",marginLeft:"25px",borderRadius:"10px",border:"none",paddingLeft:"5px"}}  type="text" id='name' placeholder='enter your name' />
                    <textarea name='comment' onChange={handlechange1} value={usercomment} style={{margin:"20px 0px",width:"250px",height:"100px",marginLeft:"25px",borderRadius:"10px",paddingLeft:"5px"}} placeholder="enter your message" id='comment' />
                    <button onClick={submithandle} type="button" style={{padding:"5px 20px",border:"1px solid #01e675" ,backgroundColor:"#01e675",color:"white",borderRadius:"10px"}}>Submit</button>
                   
            </form>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Comment