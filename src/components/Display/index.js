import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addPokemonThunk from "../../store/modules/pokemon/thunks";
import { ListCards } from "../ListCards";

export const Display = () => {
  const [digimonName, setDigimonName] = useState("");
  const dispath = useDispatch();
  const { pokemon } = useSelector((state) => state);

  const [error, setError] = useState(false);

  const pesquisar = () => {
    dispath(addPokemonThunk(digimonName, setError));
    setDigimonName("");
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>Digimon não encontrado</p>}
      <input
        type="text"
        placeholder="Digite o Digimon"
        value={digimonName}
        onChange={(event) => setDigimonName(event.target.value)}
      />
      <button onClick={pesquisar}>Pesquisar</button>
      <ListCards list={pokemon} />
    </div>
  );
};
