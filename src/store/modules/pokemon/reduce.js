import { ADD_POKEMON } from "./actionsType";
const defaultState = [];

const pokemonReduce = (state = defaultState, { type, pokemon }) => {
  switch (type) {
    case ADD_POKEMON:
      return [...state, pokemon];

    default:
      return state;
  }
};

export default pokemonReduce;
