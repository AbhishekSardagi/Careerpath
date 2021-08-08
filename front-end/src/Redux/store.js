import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { singlecourcereducer } from "./StageOne/reducer";

const rootReducer = combineReducers({
  single: singlecourcereducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
