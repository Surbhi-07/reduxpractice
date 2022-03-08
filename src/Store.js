import CombineReducer from "./Reducers/CombineReducer";
import { createStore , applyMiddleware , compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore (CombineReducer , composeEnhancers(applyMiddleware(thunk)));

export default Store;