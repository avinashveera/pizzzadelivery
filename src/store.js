import rootreducer from "./reducer/index";
import { createStore ,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"

const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk))

// ,applyMiddleware(thunk)
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default store;