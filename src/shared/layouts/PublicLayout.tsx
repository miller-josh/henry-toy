import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const PublicLayout: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Outlet />
    </Container>
  );
};

export default PublicLayout;
