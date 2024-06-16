import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import { getClientSlots } from "../shared/clientUtils";
import ClientSlot from "../components/ClientSlot";
import { Slot } from "../shared/types";
import Countdown from "../components/Countdown";
import { getCurrentUser } from "../shared/authUtils";

const Client: React.FC = () => {
  const [currentUser] = useState(getCurrentUser());
  const [clientSlots, setClientSlots] = useState([]);
  const [reserving, setReserving] = useState(false);
  const [activeSlot, setActiveSlot] = useState<Slot>();
  const [modalState, setModalState] = useState("reserve");

  const fetchClientSlots = async () => {
    setClientSlots(await getClientSlots());
  };

  useEffect(() => {
    fetchClientSlots();
  }, []);

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
      <Typography variant="h6">
        Please pick a slot for your reservation
      </Typography>
      <br />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "600px",
        }}
      >
        {clientSlots.map((slot: Slot) => (
          <ClientSlot
            key={slot.id}
            slot={slot}
            onReserve={(slot) => {
              setReserving(true);
              setActiveSlot(slot);
            }}
          />
        ))}
      </Box>

      <Dialog
        open={reserving}
        onClose={() => setReserving(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {modalState === "reserve" && "Confirm Reservation?"}
          {modalState === "confirm" && "Reservation Confirmed"}
          {modalState === "cancel" && "Reservation Canceled"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalState === "reserve" && (
              <>
                {`Do you wish to confirm this reservation at ${activeSlot?.date} ${activeSlot?.time}?`}
                <br />
                <br />
                You have <Countdown startingMins={30} /> to reserve this slot.
              </>
            )}
            {modalState === "confirm" && (
              <>
                {`Your reservation at ${activeSlot?.date} ${activeSlot?.time} has been confirmed.`}
              </>
            )}
            {modalState === "cancel" && (
              <>
                {`Your reservation at ${activeSlot?.date} ${activeSlot?.time} has been cancelled.`}
              </>
            )}
          </DialogContentText>
        </DialogContent>
        {modalState !== "cancel" && modalState !== "confirm" && (
          <DialogActions>
            <Button onClick={() => setModalState("cancel")}>Cancel</Button>
            <Button onClick={() => setModalState("confirm")} autoFocus>
              Confirm Reservation
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </Box>
  );
};

export default Client;
