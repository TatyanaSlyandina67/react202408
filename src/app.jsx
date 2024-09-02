import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
//import { restaurants } from "./mock";
import { Layout } from "./components/layout/layout";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage title={"Список Ресторанов"} />
    </Layout>
  );
};
