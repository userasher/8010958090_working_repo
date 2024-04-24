import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ErrorPage from "./components/errorPage";
import ApplyForm from "./pages/ApplyForm";
import NotificationPage from "./pages/NotificationPage";
import Doctors from "./pages/admin/Doctors";
import GeneratePdf from "./pages/GeneratePdf";
import PasswordReset from "./pages/PasswordReset";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute1 from "./components/ProtectedRoute1";
import EmailVerification from "./pages/otpVerfication";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apply-form"
              element={
                <ProtectedRoute>
                  <ApplyForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/generate-pdf"
              element={
                <ProtectedRoute>
                  <ProtectedRoute1>
                    <GeneratePdf />
                  </ProtectedRoute1>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoute>
                  <ProtectedRoute1>
                    <Doctors />
                  </ProtectedRoute1>
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/email-verification"
              element={
                <PublicRoute>
                  <EmailVerification />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/password-reset"
              element={
                <PublicRoute>
                  <PasswordReset />
                </PublicRoute>
              }
            />
            <Route
              path="/forgotpassword/:id/:token"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
