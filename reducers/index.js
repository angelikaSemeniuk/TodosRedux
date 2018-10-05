import { combineReducers } from "redux";
import statusesReducer  from "./StatusesReducer";
import listReducer  from "./ListReducer";

const reducer = combineReducers({
    statusesReducer,
    listReducer
});

export default reducer;