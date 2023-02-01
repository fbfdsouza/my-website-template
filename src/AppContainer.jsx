import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import PageHeader from "./components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      {children}
    </>
  )
}


const AppContainer = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout>
            <Home />
          </Layout>} />
          <Route path="/page1" element={<Layout>
            <Page1 />
          </Layout>} />
          <Route path="/page2" element={<Layout>
            <Page2 />
          </Layout>} />
        </Routes>
      </Router>
  );
}

export default AppContainer;
