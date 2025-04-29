
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductManagement from "./pages/ProductManagement";
import PackageManagement from "./pages/PackageManagement";
import Notifications from "./pages/Notifications";
import OrderManagement from "./pages/OrderManagement";
import CustomerManagement from "./pages/CustomerManagement";
import OffersPromotions from "./pages/OffersPromotions";
import CouponManagement from "./pages/CouponManagement";
import Dispatcher from "./pages/Dispatcher";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/package-management" element={<PackageManagement />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/order-management" element={<OrderManagement />} />
          <Route path="/customer-management" element={<CustomerManagement />} />
          <Route path="/offers-promotions" element={<OffersPromotions />} />
          <Route path="/coupon-management" element={<CouponManagement />} />
          <Route path="/dispatcher" element={<Dispatcher />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
