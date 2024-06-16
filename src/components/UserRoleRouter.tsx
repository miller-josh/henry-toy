import React from "react";
import { Navigate } from "react-router-dom";

import Provider from "../pages/Provider";
import Client from "../pages/Client";
import { getUserRole } from "../shared/authUtils";

const UserRoleRouter: React.FC = () => {
  const userRole = getUserRole();

  if (userRole === "client") {
    return <Client />;
  } else if (userRole === "provider") {
    return <Provider />;
  }

  return <Navigate to="/login" replace />;
};

export default UserRoleRouter;
