export const testAction = () => async (dispatch: any) => {
  dispatch({ type: "loading", payload: "" });
};

export const testAction2 = () => ({ type: "stuff", payload: "" });
