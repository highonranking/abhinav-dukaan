import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Plugins from "../pages/Plugins";
import Appearance from "../pages/Appearance";
import Audience from "../pages/Audience";
import Discounts from "../pages/Discounts";
import Payments from "../pages/Payments";
import Tools from "../pages/Tools";
import Analytics from "../pages/Analytics";
import Marketing from "../pages/Marketing";
import Delivery from "../pages/Delivery";
import Products from "../pages/Products";
import Orders from "../pages/Order";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="payments" element={<Payments />} />
        <Route path="tools" element={<Tools />} />
        <Route path="discounts" element={<Discounts />} />
        <Route path="audience" element={<Audience />} />
        <Route path="appearance" element={<Appearance />} />
        <Route path="plugins" element={<Plugins />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
