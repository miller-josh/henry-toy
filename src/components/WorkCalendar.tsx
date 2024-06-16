import React, { useState } from "react";
import {
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";

import WorkDay from "./WorkDay";
import { WorkDayData } from "../shared/types";
import { saveWorkCalendar } from "../shared/providerUtils";

interface WorkCalendarProps {
  providerId: string;
}

const WorkCalendar: React.FC<WorkCalendarProps> = ({ providerId }) => {
  const today = new Date();
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();
  const initialWorkHoursState: Record<string, WorkDayData> = {};

  // calculate the remaining work days in the current month:
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(today.getFullYear(), today.getMonth(), i);
    if (date >= today) {
      initialWorkHoursState[date.toISOString()] = {
        date: date.toISOString(),
        startHour: "",
        endHour: "",
      };
    }
  }

  const [workHours, setWorkHours] = useState<Record<string, WorkDayData>>(
    initialWorkHoursState,
  );
  const [saving, setSaving] = useState(false);
  const [showSavedDialog, setShowSavedDialog] = useState(false);

  const handleChangeStartHour = (date: Date, value: string) => {
    const dateKey = date.toISOString();
    setWorkHours((prevWorkHours) => ({
      ...prevWorkHours,
      [dateKey]: { ...prevWorkHours[dateKey], startHour: value },
    }));
  };

  const handleChangeEndHour = (date: Date, value: string) => {
    const dateKey = date.toISOString();
    setWorkHours((prevWorkHours) => ({
      ...prevWorkHours,
      [dateKey]: { ...prevWorkHours[dateKey], endHour: value },
    }));
  };

  const handleSaveCalendar = async () => {
    setSaving(true);
    console.log("Saved Work Hours: ", workHours);
    await saveWorkCalendar(providerId, workHours);
    setSaving(false);
    setShowSavedDialog(true);
  };

  const renderRemainingWorkDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      if (date >= today) {
        days.push(date);
      }
    }
    return days.map((date) => (
      <WorkDay
        key={date.toISOString()}
        date={date}
        startHour={workHours[date.toISOString()].startHour}
        endHour={workHours[date.toISOString()].endHour}
        onChangeStartHour={handleChangeStartHour}
        onChangeEndHour={handleChangeEndHour}
      />
    ));
  };

  return (
    <>
      <Paper
        elevation={2}
        sx={{ display: "flex", flexDirection: "column", padding: "5px 10px" }}
      >
        {renderRemainingWorkDays()}
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          onClick={handleSaveCalendar}
        >
          {saving ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Save Calendar"
          )}
        </Button>
      </Paper>

      <Dialog
        open={showSavedDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Work Calendar Saved"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your work calendar has been saved successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSavedDialog(false)} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WorkCalendar;
