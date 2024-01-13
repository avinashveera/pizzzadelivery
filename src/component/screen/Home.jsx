import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallpizza} from '../../action/index'



import Card from './Card';

const Home = () => {
  useEffect(()=>{ dispach(getallpizza())},[0])
const dispach =useDispatch();


const items=useSelector(state=>state.pizzareducer)

const {pizzas,loading,Error}=items

console.log(pizzas)

  return (
    <>
    {
    loading?
    <h1>...loading</h1>
    :
    pizzas?
    <div className='container-fluid row my-6'>
    {
  pizzas.map((pizza)=>{
    return (
      
          <Card pizza={pizza} />
      
    )})
    
    }
    </div>:
  <>{Error}Network Error : please check your network connection</>
    
    }

    </>
  )
}

export default Home