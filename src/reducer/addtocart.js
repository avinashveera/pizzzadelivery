const cartitem=JSON.parse(localStorage.getItem('item'))?JSON.parse(localStorage.getItem('item')):[] 
const initialstate={
    item:[...cartitem]
}


export const addtocart=(state=initialstate,action)=>{

    console.log(typeof(state.item))

    switch (action.type) {
        case "addcart":return {
            ...state,
            item:[...state.item,action.payload]
        
        }
            
            break;
    
        default:return state
            break;
    }


    
}