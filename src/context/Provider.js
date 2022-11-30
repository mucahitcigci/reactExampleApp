import React, { createContext, useState } from "react";

const initialState = {
  users: [],
  setUsers: () => {},
};

export const AppContext = createContext(initialState);

function Provider(props) {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <AppContext.Provider value={{ users, setUsers }}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}
export default Provider;
