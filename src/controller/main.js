import { cartsReducer } from "./reducer";
import {combineReducers} from "redux";

const root = combineReducers({
    cartsReducer,
});

export default root;