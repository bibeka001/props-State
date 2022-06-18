import { combineReducers } from "redux";
import { messageReducer } from "./message/Msg.reducer";
let rootReducer = combineReducers({ message: messageReducer });

export { rootReducer };
