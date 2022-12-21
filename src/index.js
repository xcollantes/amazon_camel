import React from "react";
import ReactDOM from "react-dom/client";

import { Container } from "@mui/material";

import "./index.css";
import ToolbarButton from "./ToolbarButton";

const root = ReactDOM.createRoot(document.getElementById("rootExtension"));
root.render(
  <React.StrictMode>
    <Container>
      <ToolbarButton />
    </Container>
  </React.StrictMode>
);