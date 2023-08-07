import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CarouselReducer from "./reducers/CarouselReducer";
import ListMovieReducer from "./reducers/ListMovieReducer";
import TheaterReducer from "./reducers/TheaterReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  ListMovieReducer,
  TheaterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
