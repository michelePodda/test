import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyle";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./themes";
import HomePage from "./screen/HomePage";
import SheetPage from "./screen/SheetPage";
import SettingsPage from "./screen/SettingsPage";
import ErrorPage from "./screen/ErrorPage"

export default function App() {
  const { themeDark } = useSelector((state) => state.data);
  return (
    <>
      <ThemeProvider theme={themeDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sheet/:id" element={<SheetPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
