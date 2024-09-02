import { MenuItemCounter } from "../menuitem-counter/menuitem-counter";

export const MenuItem = ({name, price }) => {
    return (
        <>
        {name} / {price} $ 
        <MenuItemCounter />
        </>
    )
  }