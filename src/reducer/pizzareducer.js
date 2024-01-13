
const initialstate={
    pizzas:[]
}

export const pizzareducer=(state=initialstate,action)=>{

    switch (action.type) {
        case "getpizza":{
            return{
                ...state,
                loading:true

            }
        }

        case "pizzasuccess":{
            return{
                pizzas:action.payload,
                loading:false
            }
        }

        case "pizzafail":{
            return{
            err:action.payload,
            loading:false
            }
        }
            
           
    
        default:return state
    }

}