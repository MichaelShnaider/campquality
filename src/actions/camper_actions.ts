import { CamperDataEnum } from "../constants";

export const changeCamperData = (camper) => (dispatch) => dispatch({ type: CamperDataEnum.CHANGE_CAMPER, payload: camper });
