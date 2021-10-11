import { combineReducers, createStore } from "redux";
import FormReducer from "../reducers/FormReducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      user: FormReducer,
    })
  );
  return store;
};

export default configStore;
