import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, seatSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    const data = searchParams.get("q");
    const age = searchParams.get("age");
    alert(`${data} ${age}`);
  };
  return (
    <div>
      <h1>This is a search page .</h1>
      <form onSubmit={handleSearch} >
        <label htmlFor="">Search : </label>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => seatSearchParams({ q: e.target.value })}
        />
        <button onClick={() => seatSearchParams({ q: "Muhammad Adnan" })}>
          Show all Users
        </button>
        <br />
        <br />
        <button value="Search">Search</button>

        <button value="Reset" onClick={() => seatSearchParams({})}>
          Reset
        </button>
      </form>
    </div>
  );
}

export { Search };
