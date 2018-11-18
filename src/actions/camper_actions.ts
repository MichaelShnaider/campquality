import {
  CamperDataEnum,
  ChangeTimeOfDayEnum,
  TimesOfDayEnum
} from "../constants";

export const changeCamperData = camper => dispatch => {
  console.log("DOING!");
  dispatch({ type: CamperDataEnum.CHANGE_CAMPER, payload: camper });
};

export const changeTimeOfDay = (timeOfDay: TimesOfDayEnum) => dispatch => {
  dispatch({ type: ChangeTimeOfDayEnum.CHANGE_TIME, payload: timeOfDay });
};
