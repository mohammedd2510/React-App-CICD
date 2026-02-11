import React from "react";
import Hello from "./components/Hello";

export default function App() {
  return (
    <div className="app">
      <h1>React Static Site</h1>
      <Hello name={process.env.REACT_APP_NAME} />
    </div>
  );
}
