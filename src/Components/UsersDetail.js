import React from "react";
import { useParams } from "react-router-dom";

function UsersDetail() {
  // MEthod 1
  // const userId = useParams();
  // const id = userId.id;

  // MEthod 2
  const { id } = useParams();

  return (
    <div>
      <h1>User Detail Page... {id}</h1>
    </div>
  );
}

export { UsersDetail };
