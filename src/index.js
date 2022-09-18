import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EndLose from "./pages/EndLose";
import EndWin from "./pages/EndWin";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<App />} />
        <Route path="/endwin" element={<EndWin />} />
        <Route path="/endlose" element={<EndLose />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
