import { CamperDataEnum } from "../constants";

export const changeCamperData = camper => dispatch => {
  console.log("DOING!");
  dispatch({ type: CamperDataEnum.CHANGE_CAMPER, payload: camper });
};
