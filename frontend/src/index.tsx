import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element | DocumentFragment);
// root.render(
//   <React.StrictMode>
//     <ModeProvider>
//         <App />
//     </ModeProvider>
//   </React.StrictMode>
// );
root.render(<App />);
