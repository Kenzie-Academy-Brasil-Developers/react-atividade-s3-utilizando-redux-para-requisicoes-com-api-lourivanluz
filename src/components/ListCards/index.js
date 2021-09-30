import { Card } from "../card";
import { UlStyled } from "./style";

export const ListCards = ({ list }) => {
  return (
    <>
      <UlStyled>
        {list.map((item, index) => (
          <li key={index}>
            <Card item={item} />
          </li>
        ))}
      </UlStyled>
    </>
  );
};
