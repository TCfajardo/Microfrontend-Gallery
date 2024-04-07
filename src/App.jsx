import React from "react";
import ReactDOM from "react-dom";

import TagsComponent from "./components/TagsComponent";

import "./index.css";

const App = () => (

    <TagsComponent />
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
