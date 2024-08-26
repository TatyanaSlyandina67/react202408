import { restaurants } from "../../mock";
import { Restaurant } from "../restaurants/restaurants";

export const RestaurantsPage = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>

      {restaurants.map(({ name, menu, reviews }) => (
        <Restaurant
          name={name}
          menu={menu}
          reviews={reviews}
        />
      ))}
    </div>
  );
};