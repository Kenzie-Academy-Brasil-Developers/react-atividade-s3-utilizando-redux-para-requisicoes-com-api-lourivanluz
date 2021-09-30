import { DivStyled } from "./style";
export const Card = ({ item }) => {
  return (
    <>
      {item && (
        <DivStyled>
          <h2>{item.name}</h2>
          <img src={item.img} />
        </DivStyled>
      )}
    </>
  );
};
