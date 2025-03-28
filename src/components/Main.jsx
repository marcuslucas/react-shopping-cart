import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Main = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
