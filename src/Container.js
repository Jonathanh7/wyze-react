import React from "react";
import Header from "./components/Header";

export default function Container() {
  return (
    <div>
      
      <Route>
        <Search />
      </Route>
      <Route>
        <Random />
      </Route>
    </div>
  );
}
