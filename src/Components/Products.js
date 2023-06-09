import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
    <div>
      <h1>This is Prducts Page</h1>
      </div>
      <nav>
        <Link to="shirts" >Shirts</Link>
        <Link to="jeanse" >Jeans</Link>
      </nav>
      <Outlet/>
    </>
  );
}

export { Products };
