import React from 'react'
import Comment from './Comment';
import { Navbar } from './navbar';


const Header = () => {


  const showcomment=()=>{
    const x=  document.getElementsByClassName('cust-container')
    x[0].style.display="block";

  }

  const hidecomment=()=>{
    const x=  document.getElementsByClassName('cust-container')
    x[0].style.display="none";

  }



  return (<>

<Navbar  showfc={showcomment}  />
  <Comment  hidefc={hidecomment}/>
    
  </>
    
  )
}

export default Header;