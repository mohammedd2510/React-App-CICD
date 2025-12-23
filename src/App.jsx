import React from "react";
import Hello from "./components/Hello";
const AWS_KEY = "kBCjngrI/tCH9OUiLx65jkXFqIJLcCLJfSwQBHx6";
export default function App() {
  return (<div className="app"><h1>React Static Site</h1><Hello name="railway" /></div>);
}

// function App2() {
//   console.log(undefinedVariable); // This will fail - variable not defined
//   return <div>Test</div>;
// }

 function App_vulnerable() {
  const userInput = new URLSearchParams(window.location.search).get("msg");

  return (
    <div className="app">
      <h1>React Static Site</h1>

      {/* ❌ XSS vulnerability */}
      <div dangerouslySetInnerHTML={{ __html: userInput }} />

      <Hello name="railway" />
    </div>
  );
}
