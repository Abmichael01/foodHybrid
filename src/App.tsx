import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Register from "./pages/Auth/Register";
import AuthLanding from "./pages/Auth/AuthLanding";
import SiteLayout from "./layouts/SiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Portfolio from "./pages/PartnerDashboard/Portfolio";
import Shop from "./pages/PartnerDashboard/Shop";
import PortfolioDetail from "./pages/PartnerDashboard/PortfolioDetail";
import MyOrders from "./pages/PartnerDashboard/MyOrders";
import OrderDetails from "./pages/PartnerDashboard/Order/OrderDetails";
import OrderTransactionFlow from "./pages/PartnerDashboard/Order/OrderTransactionFlow";
import Wallet from "./pages/PartnerDashboard/Wallet";

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

        <Route path="/partner" element={<DashboardLayout />}>
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path="portfolio" element={<PortfolioDetail />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>

          <Route path="shop" element={<Shop />} />

          <Route path="my-orders">
            <Route index element={<MyOrders />} />
            <Route path=":orderId" element={<OrderDetails /> } />
            <Route path=":orderId/transactions" element={<OrderTransactionFlow /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
