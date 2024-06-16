import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import { getCurrentUser } from "../shared/authUtils";
import WorkCalendar from "../components/WorkCalendar";

const Provider: React.FC = () => {
  const [currentUser] = useState(getCurrentUser());

  return (
    <Box
      sx={{
        marginTop: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Welcome {currentUser.name}</Typography>
      <Typography variant="body1">
        Please select the when you'd like work this month
      </Typography>
      <br />
      <WorkCalendar providerId={currentUser.id} />
    </Box>
  );
};

export default Provider;
