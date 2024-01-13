export const addcart=(pizza,quantity,Varient)=> (dispach,getState)=>{

     var cartitem={
         name:pizza.name,
         _id:pizza._id,
         image:pizza.image,
         Varient:Varient,
         quantity,quantity,
         price:pizza.prices,
         price:pizza.prices[0][Varient]*quantity
         
     }   
    dispach({type:"addcart",payload:cartitem})
    localStorage.setItem("item",JSON.stringify(getState().addtocart.item))

}