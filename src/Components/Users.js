import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <>
      <div >
        <h1>Users Detail Page</h1>
        <div className="users-pg">
        <h1>
          <Link to="/users/1">User 1</Link>{" "}
        </h1>
        <h1>
          <Link to="/users/2">User 2</Link>
        </h1>
        <h1>
          <Link to="/users/3">User 3</Link>
        </h1>
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export { Users };
