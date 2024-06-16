import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Box, AppBar, Button, Toolbar } from "@mui/material";

import { isAuthenticated, logout } from "../authUtils";
import Logo from "../../components/Logo";

const ProtectedLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return isAuthenticated() ? (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ flexGrow: 1, marginTop: "10px" }}>
            <Logo />
          </div>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedLayout;
