import { produce } from "immer";
import { CamperDataEnum } from "../constants";
import { camperData } from "../data";

type State = {
  status: string;
};

const initial: State = camperData;
type ActionType = {
  type: string;
  payload: any;
};

export const camperReducer = (state = initial, action: ActionType) => {
  return produce(state, draft => {
    switch (action.type) {
      case CamperDataEnum.DEFAULT: {
        return;
      }
      default: {
        return;
      }
    }
  });
};
