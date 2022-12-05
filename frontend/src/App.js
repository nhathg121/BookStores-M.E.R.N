import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component :
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// User Component
import UserChatComponent from "./components/user/UserChatComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

// Pages :
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegistorPage from "./pages/RegistorPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

// User Pages
import ProtectedRoutesComponent from "../src/components/ProtectedRoutesComponent";
// protected user pages
import UserCartDetailPage from "./pages/user/UserCartDetailPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailPage from "./pages/user/UserOrderDetailPage";
import UserProfilePage from "./pages/user/UserProfilePage";

// protected admin pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreaeteProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailPage from "./pages/admin/AdminOrderDetailPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* publicly available routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registor" element={<RegistorPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details/:id" element={<ProductDetailPage />} />
          <Route path="*" element="PAGE NOT FOUND 404" />

          <Route path="/" component={HomePage}>
            {" "}
            in previous version of react-router-dom
          </Route>

          {/* //User protected Router */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route path="/user/cart-details" element={<UserCartDetailPage />} />

            <Route
              path="/user/order-details"
              element={<UserOrderDetailPage />}
            />
            <Route />
          </Route>
        </Route>

        {/* //Admin protected Router */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/create-product"
            element={<AdminCreaeteProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/chat" element={<AdminChatsPage />} />
          <Route
            path="/admin/order-detail"
            element={<AdminOrderDetailPage />}
          />
          <Route path="/admin/analystic" element={<AdminAnalyticsPage />} />
          <Route />
        </Route>
      </Routes>

      {/* <FooterComponent /> */}
    </BrowserRouter>
  );
}

export default App;
