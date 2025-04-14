

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Register from './pages/Auth/Register';
import AuthLanding from './pages/Auth/AuthLanding';

const App = () => {
  return (
    <BrowserRouter >
        <Routes>
          <Route element={<MainLayout  />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
          </Route>

          <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<AuthLanding />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App