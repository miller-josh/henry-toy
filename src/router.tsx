import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedLayout from "./shared/layouts/ProtectedLayout";
import PublicLayout from "./shared/layouts/PublicLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserRoleRouter from "./components/UserRoleRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/app",
    element: <ProtectedLayout />,
    children: [{ path: "", element: <UserRoleRouter /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
