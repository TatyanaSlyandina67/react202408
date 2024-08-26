import { MenuItem } from "../menuitem/menuitem";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((menuitem) => (
        <MenuItem name={menuitem.name} price={menuitem.price}/>
      ))}
      </ul>
    );
  };

 