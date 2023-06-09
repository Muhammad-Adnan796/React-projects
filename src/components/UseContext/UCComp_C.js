import React, { useContext } from "react";
import { FatherNameContext, NameContext } from "../../App";

function UCComp_C() {
  let names = useContext(NameContext);
  let Fnames = useContext(FatherNameContext);

  return (
    <div>
      <h1>I am Component C</h1>
      <h1>{names}</h1>
      <h1>{Fnames}</h1>
    </div>
  );
}

export { UCComp_C };
