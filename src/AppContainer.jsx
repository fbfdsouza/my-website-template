import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import ProtectedRoutes from "./components/ProtectedRoutes";

const AppContainer = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="" element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default AppContainer;
