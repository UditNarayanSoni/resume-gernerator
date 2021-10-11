export const formAction = (fromData, moveData) => {
  return (dispatch) => {
    dispatch({
      type: "From_Data",
      form: fromData,
    });
    moveData();
  };
};
