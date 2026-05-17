import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layouts
import { PublicLayout } from "@/components/layout/PublicLayout";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { AdminLayout } from "@/components/layout/AdminLayout";

// Public Pages
import HomePage from "@/pages/public/HomePage";
import AboutPage from "@/pages/public/AboutPage";
import ContactPage from "@/pages/public/ContactPage";
import CoursesPage from "@/pages/public/CoursesPage";
import CourseDetailPage from "@/pages/public/CourseDetailPage";
import BlogPage from "@/pages/public/BlogPage";
import BlogDetailPage from "@/pages/public/BlogDetailPage";
import CareersPage from "@/pages/public/CareersPage";

// Auth Pages
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";

// User Pages
import ProfilePage from "@/pages/user/ProfilePage";
import MyLearningPage from "@/pages/user/MyLearningPage";
import FavoritesPage from "@/pages/user/FavoritesPage";
import CartPage from "@/pages/user/CartPage";
import CheckoutPage from "@/pages/user/CheckoutPage";

// Admin Pages
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminUsersPage from "@/pages/admin/AdminUsersPage";
import AdminCoursesPage from "@/pages/admin/AdminCoursesPage";
import AdminPaymentsPage from "@/pages/admin/AdminPaymentsPage";
import AdminCommentsPage from "@/pages/admin/AdminCommentsPage";

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          {/* ── Public Routes ─────────────────────────── */}
          <Route element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:slug" element={<CourseDetailPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogDetailPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="career" element={<Navigate to="/careers" replace />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="my-learning" element={<MyLearningPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>

          {/* ── Auth Routes ───────────────────────────── */}
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
          </Route>

          {/* ── Admin Routes ──────────────────────────── */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="courses" element={<AdminCoursesPage />} />
            <Route path="payments" element={<AdminPaymentsPage />} />
            <Route path="comments" element={<AdminCommentsPage />} />
          </Route>

          {/* ── 404 Fallback ──────────────────────────── */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}
