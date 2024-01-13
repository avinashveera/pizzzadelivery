import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/veerasoft.png"


export const Navbar = (props) => {

//hello veera

  const shownav = () => {
    const hdnav = document.getElementsByClassName("hidenav")
      hdnav[0].style.transform= "translateX(0)";
  }
  const hidenav = () => {
    const hdnav = document.getElementsByClassName("hidenav")
      hdnav[0].style.transform= "translateX(-100vw)";
  }


  return (

    <>
     
      <div style={{ height: "100%" }} className='customnavbar'>

        
        
        <div className='navlogo' style={{ height: "100%" }}>

          <Link to="/"><img style={{ height: "40px", width: "40vw", overflow: "hidden" }} src={logo} alt="" srcset="" /></Link>



        

        </div>
        {/* comment */}

        


        <div className='navlinks' style={{ width: "100%", height: "100" }} >

       
          <i onClick={shownav} className="fa-solid fa-bars togglemenu" style={{position:"absolute",right:"20px",top:"5px",padding:"10px"}}></i>

          <div onClick={hidenav} className="hidenav">
     
          {/* <i onClick={hidenav} class="fa-solid fa-rectangle-xmark" style={{position:"absolute",right:"40px",top:"15px",fontSize:"25px"}}></i> */}

            <ul >
            
              <li>
                <Link className="navli" to="/">Home</Link>
              </li>

              <li>
                <Link className="navli" to="/about">About</Link>
              </li>

              <li>
                <Link className="navli" to="/services">Services</Link>
              </li>

            </ul>

          </div>

        </div>


        {/* comment */}
        {/* contact with whatsapp */}



        <div className='whatsappfix blob '>

          <a href='https://wa.me/7991106305?text=hello veera software'><i className="fa-brands fa-whatsapp"></i></a>

        </div>


        <div className='feebback' >

          <p onClick={props.showfc}>Enquiry</p>

        </div>





      </div>



    </>
  )
}
