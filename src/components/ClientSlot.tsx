import React, { useState } from "react";
import { Paper, Typography, Button } from "@mui/material";

import { Slot } from "../shared/types";

interface ClientSlotProps {
  slot: Slot;
  onReserve: (slot: Slot) => void;
}

const ClientSlot: React.FC<ClientSlotProps> = (props) => {
  const { onReserve, slot } = props;
  const [reserved] = useState<boolean>(slot.isReserved);

  const handleReserve = () => {
    // setReserved(true);
    onReserve(slot);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        padding: "10px 15px",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        component="span"
        sx={{ flexGrow: 1, fontWeight: 700 }}
      >
        {slot.date} {slot.time}
      </Typography>

      {!slot.isReserved && !reserved && (
        <Button variant="contained" onClick={handleReserve}>
          Reserve This Time
        </Button>
      )}
    </Paper>
  );
};

export default ClientSlot;
