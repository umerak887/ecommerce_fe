import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./modules/auth/page/login";
import SignupPage from "./modules/auth/page/Signup";
import IntroductionPage from "./page/IntroductionPage";
import AuthLayout from "./layouts/AuthLayout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<IntroductionPage />} path="/" />
      </Routes>
    </div>
  );
};

export default App;
