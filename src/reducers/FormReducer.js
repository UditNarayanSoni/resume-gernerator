const initialState = {};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Form_Data": {
      return action.form;
    }
    default:
      return state;
  }
};

export default FormReducer;
