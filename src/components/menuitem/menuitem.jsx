import { Counter } from "../counter/counter";

export const MenuItem = ({name, price }) => {
    return (
        <li >{name} / {price} $ <Counter /></li>
    );
  };