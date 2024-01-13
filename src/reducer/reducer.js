const initialstate=10;

const changenum=(state=initialstate,action)=>{

    switch (action.type) {
        case "increment": return state+1;
        case "decrement":return state-1;
        default :return state;
    }

}

export default changenum;