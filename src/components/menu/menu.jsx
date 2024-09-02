import {MenuItem} from "../menuitem/menuitem";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu?.map((menuItem) => (
        <li > 
          <MenuItem name={menuItem.name} price={menuItem.price} /> 
        </li>
      ))}
    </ul>
  )
}
