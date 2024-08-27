import { Counter } from "../counter/counter";

export const Menu = ({menu}) => {
  return (
    <div>
      {menu?.map((item) => (
        <li key={item.id}>
          {item.name} price={item.price} $ <Counter/>
        </li>
    ))}
    </div>
  );
};

/*import { MenuItem } from "../menuitem/menuitem";
export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((menuitem) => (
        <MenuItem name={menuitem.name} price={menuitem.price}/>
      ))}
      </ul>
    );
  };


  <li >{name} / {price} $ <Counter /></li>*/

 