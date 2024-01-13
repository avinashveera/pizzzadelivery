import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment ,decrement,getallpizza} from '../action'



const About = () => {

  const pizzas=useSelector(state=>state.pizzareducer)

  const count=useSelector(state=>state.changenum)

  const dispach=useDispatch();

  return (
    <div>About

  <h1>{count}</h1>

<button onClick={()=>{dispach(increment())}}>increment</button>
&nbsp;&nbsp; &nbsp; &nbsp;
<button onClick={()=>{dispach(decrement())}}>decremnt</button>

<button onClick={()=>{dispach(getallpizza())}}>getpiza</button>
      
    </div>
  
  )
}

export default About