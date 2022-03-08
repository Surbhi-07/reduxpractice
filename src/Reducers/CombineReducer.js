import Increment from "./Increment";
import Decrement from "./Decrement";
import AsyncAction from "./AsyncAction";
import { combineReducers } from "redux";

const CombineReducer = combineReducers({
    Increment,
    Decrement,
    async: AsyncAction,
});


export default CombineReducer;