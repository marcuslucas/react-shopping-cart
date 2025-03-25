import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
