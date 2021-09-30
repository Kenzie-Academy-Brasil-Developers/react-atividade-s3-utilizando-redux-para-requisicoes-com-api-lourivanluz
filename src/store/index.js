import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import pokemonReduce from "./modules/pokemon/reduce";

const reduces = combineReducers({ pokemon: pokemonReduce });

const store = createStore(reduces, applyMiddleware(thunk));

export default store;
