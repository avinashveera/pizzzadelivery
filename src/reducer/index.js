import {combineReducers} from "redux"
import changenum from "./reducer";
import { pizzareducer } from "./pizzareducer";
import {addtocart} from "./addtocart"
const rootreducer=combineReducers({
    changenum,pizzareducer,addtocart
})

export default rootreducer;
