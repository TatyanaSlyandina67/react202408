import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './mock.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
  {restaurants.map((restaurant)=>(
    <div>
     <h2> {restaurant.name} </h2>
    <h3>Меню</h3>
    <ul>
      {restaurant.menu.map((menuItem)=>(
        <li>{menuItem.name}</li>
      ))}
    </ul>
    <h3>Отзывы</h3>
    <ul>
        {restaurant.reviews.map((review)=>(
        <li>{review.text}</li> 
        ))}
    </ul>  
  </div>
  ))}
  </div>
)


/*let div = document.createElement('div');
div.id = 'root';
let ul;
function restaurantsList(arr) {
  ul = document.createElement('ul');
  restaurants.forEach(elems => {
      let li = document.createElement('li');
      let list =
          (li.textContent = `name: ${elems.name};`);
      //console.log(li);
      ul.append(li);
      console.log(ul);
  });
  return;
}

restaurantsList(restaurants);

document.getElementById('root').append(ul);*/





