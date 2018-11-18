import { produce } from "immer";
import {
  CamperDataEnum,
  TimesOfDayEnum,
  ChangeTimeOfDayEnum
} from "../constants";
import { camperData } from "../data";

type State = {
  status: string;
};

function checkLocalStorage() {
  const storedData = localStorage.getItem("camperData");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return camperData;
  }
}

function saveToLocalStorage(data) {
  localStorage.setItem("camperData", JSON.stringify(data));
}

const initial: State = checkLocalStorage();
type ActionType = {
  type: string;
  payload: any;
};

export const timeOfDayReducer = (
  state = { timeOfDay: TimesOfDayEnum.BREAKFAST },
  action: ActionType
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ChangeTimeOfDayEnum.CHANGE_TIME: {
        draft.timeOfDay = action.payload;
        return;
      }
      default: {
        return;
      }
    }
  });
};

export const camperReducer = (state = initial, action: ActionType) => {
  const newState = produce(state, draft => {
    switch (action.type) {
      case CamperDataEnum.DEFAULT: {
        return;
      }
      case CamperDataEnum.CHANGE_CAMPER: {
        console.log("UPDATED IN REDUCER");
        draft[action.payload.id] = action.payload;
      }
      default: {
        return;
      }
    }
  });

  saveToLocalStorage(newState);
  return newState;
};
