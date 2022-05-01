import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import "./index.scss";
import registerSW from "./serviceWorkerRegistration";

import App from "./App";

const rootElement = document.getElementById("root");
// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
const root = createRoot(rootElement as Element | DocumentFragment);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<App />);

registerSW();
