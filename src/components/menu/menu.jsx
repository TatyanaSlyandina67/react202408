import {MenuItem} from "../menuitem/menuitem";
//import { Counter } from "../counter/counter";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu?.map((menuItem) => (
        <li > <MenuItem name={menuItem.name} price={menuItem.price} /> </li>
      ))}
    </ul>
  )
}
