import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul className="list">
        <li>home</li>
        <li>about</li>
        <li>contacts</li>
        <li>products</li>
      </ul>
      <div className="container">
        <p className="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          aperiam nisi vero beatae ab, magnam delectus aspernatur voluptatibus
          esse cum?
        </p>
      </div>
    </>
  );
}

export default App;
