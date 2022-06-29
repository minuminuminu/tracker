import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyles.jsx";
import { PageNotFound } from "./pages/PageNotFound";
import { Menu } from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const FullPageDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <FullPageDiv>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </FullPageDiv>
    </BrowserRouter>
  </React.StrictMode>
);
