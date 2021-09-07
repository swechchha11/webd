import countReducer from "./counterReducer";
import { combineReducers } from "redux";
// import notesReducer from "./notesReducer34";
import notesReducer from "./notesReducer";

const rootReducer = combineReducers({
  // counter: countReducer,
  notes: notesReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;

export default rootReducer;