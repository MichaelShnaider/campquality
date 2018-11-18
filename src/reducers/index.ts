import { combineReducers } from "redux";
import { camperReducer, timeOfDayReducer } from "./camperReducer";

export type RootState = {
  campers: ReturnType<typeof camperReducer>;
  timeOfDay: ReturnType<typeof timeOfDayReducer>;
};

const rootReducer = combineReducers({
  campers: camperReducer,
  timeOfDay: timeOfDayReducer
});

export default rootReducer;
