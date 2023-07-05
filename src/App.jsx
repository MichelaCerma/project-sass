import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";
import { Button } from "./components/Buttons";

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
      <div className="wrapper">
        <div className="row">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
        </div>
        <div className="row">
          <div className="col-5">col5</div>
          <div className="col-7">col7</div>
        </div>
        <div className="row">
          <div className="col-12">col12</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-6">col6</div>
        </div>
        <div className="row space-between">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-8">col8</div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3">
          <img src="https://picsum.photos/200/200" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <img src="https://picsum.photos/200/200" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <img src="https://picsum.photos/200/200" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <img src="https://picsum.photos/200/200" />
        </div>
      </div>
      <div className="Buttons">
        <div className="button__default">
          <Button text="button" />
          <Button text="button" border />
          <Button text="button" size="m" />
          <Button text="button" border size="m" />
          <Button text="button" size="s" />
          <Button text="button" border size="s" />
        </div>
        <div className="button__icon-right">
          <Button text="button" icon iconLeft />
          <Button text="button" icon iconLeft border />
        </div>
        <Button text="button" icon />
        <Button text="button" icon border />
        <Button icon />
      </div>
    </>
  );
}

export default App;
