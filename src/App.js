import React from "react";
import "./App.css";
import Form from "./containers/Form";

const App = () => {
  const getXreferences = () => {
    let xreference = document.querySelector("meta[name='xreference']");
    if (xreference) {
      const content = xreference.getAttribute("content");
      const isProduct = /^product/i.test(content);
      if (isProduct) {
        const product = content.slice(8).split(";");
        return product;
      } else {
        return false;
      }
    }
    return false;
  };

  const meta = getXreferences();
  let company = meta[0] || "";
  let product = meta[1] || "";

  const form = company ? <Form company={company} product={product} /> : null;

  return <div className="App">{form}</div>;
};

export default App;
