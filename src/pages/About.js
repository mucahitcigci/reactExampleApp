import { useContext } from "react";

import { AppContext } from "../context/Provider";

function About() {
  const { count } = useContext(AppContext);
  return (
    <div>
      <h1>About Us {count}</h1>
    </div>
  );
}
export { About };
