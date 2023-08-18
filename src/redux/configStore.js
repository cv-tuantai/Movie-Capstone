import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import ListMovieReducer from "./reducers/ListMovieReducer";
import TheaterReducer from "./reducers/TheaterReducer";
import DetailMovieReducer from "./reducers/DetailMovieReducer";
import LoginReducer from "./reducers/LoginReducer";
import CheckoutReducer from "./reducers/CheckoutReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  ListMovieReducer,
  TheaterReducer,
  DetailMovieReducer,
  LoginReducer,
  CheckoutReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
