import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Game from "./pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EndLose from "./pages/EndLose";
import EndWin from "./pages/EndWin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game" element={<EndWin />} />
        <Route path="/game" element={<EndLose />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
