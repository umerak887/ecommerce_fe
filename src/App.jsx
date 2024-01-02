import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./modules/auth/page/login";
import SignupPage from "./modules/auth/page/Signup";
import IntroductionPage from "./page/IntroductionPage";
import AuthLayout from "./layouts/AuthLayout";
import NotFoundPage from "./page/NotFound";
import DashBoardLayout from "./layouts/DashBoardLayout";
import Stats from "./components/Stats";
import DashBoardHomePage from "./modules/dashboard/homeModule/page/DashBoardHome";
import DashboardProductsPage from "./modules/dashboard/products/page/DashboardProducts";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<DashBoardLayout />} path="/dashboard">
          <Route element={<DashBoardHomePage />} path="/dashboard/home" />
          <Route
            element={<DashboardProductsPage />}
            path="/dashboard/products"
          />
        </Route>

        <Route element={<IntroductionPage />} path="/" />
        <Route element={<AuthLayout />} path="/auth">
          <Route element={<SignupPage />} path="/auth/signup" />
          <Route element={<LoginPage />} path="/auth/login" />
        </Route>

        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </div>
  );
};

export default App;
