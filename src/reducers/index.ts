import { combineReducers } from "redux";
import { camperReducer } from "./camperReducer";

export type RootState = {
  campers: ReturnType<typeof camperReducer>;
};

const rootReducer = combineReducers({
  campers: camperReducer
});

export default rootReducer;
