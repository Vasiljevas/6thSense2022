import { createStore } from "redux";
import rootReducer from "../state";

const store = createStore(rootReducer);

export default store;
