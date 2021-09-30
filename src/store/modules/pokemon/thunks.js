import axios from "axios";
import { addPokemon } from "./actions";

const addPokemonThunk = (pokemon, setError) => (dispath) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((response) => response.data)
    .then((response) => {
      const [filtred] = response.filter((item) => item.name === pokemon);
      if (!filtred) {
        return setError(true);
      }
      setError(false);
      dispath(addPokemon(filtred));
    })
    .catch((_) => {
      setError(true);
    });
};

export default addPokemonThunk;
