import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />, // Home page component
      },
      {
        path: "cart",
        element: <Cart />, // Cart page component
      },
      {
        path: "product/:id",
        element: <ProductDetails />, // Cart page component
      },
      {
        path: "checkout",
        element: <Checkout />, // Cart page component
      },
    ],
  },
];

export default routes;
