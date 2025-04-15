import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Register from "./pages/Auth/Register";
import AuthLanding from "./pages/Auth/AuthLanding";
import SiteLayout from "./layouts/SiteLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/landing-page" element={<LandingPage />} />

        <Route path="/shop" element={<AuthLayout />}>
          <Route index element={<AuthLanding />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
