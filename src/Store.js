import CombineReducer from "./Reducers/CombineReducer";
import { createStore } from "redux";

const Store = createStore (CombineReducer);

export default Store;