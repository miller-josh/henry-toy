import React from "react";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { format } from "date-fns";

interface WorkDayProps {
  date: Date;
  startHour: string;
  endHour: string;
  onChangeStartHour: (date: Date, value: string) => void;
  onChangeEndHour: (date: Date, value: string) => void;
}

const WorkDay: React.FC<WorkDayProps> = ({
  date,
  startHour,
  endHour,
  onChangeStartHour,
  onChangeEndHour,
}) => {
  const renderDailyHours = (
    label: string,
    value: string,
    onChange: (value: string) => void,
  ) => {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id={`${label}-time-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-time-select-label`}
          id={`${label}-time-select`}
          label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <MenuItem value="">--</MenuItem>
          <MenuItem value="8">8 am</MenuItem>
          <MenuItem value="9">9 am</MenuItem>
          <MenuItem value="10">10 am</MenuItem>
          <MenuItem value="11">11 am</MenuItem>
          <MenuItem value="12">12 pm</MenuItem>
          <MenuItem value="13">1 pm</MenuItem>
          <MenuItem value="14">2 pm</MenuItem>
          <MenuItem value="15">3 pm</MenuItem>
          <MenuItem value="16">4 pm</MenuItem>
          <MenuItem value="17">5 pm</MenuItem>
          <MenuItem value="18">6 pm</MenuItem>
          <MenuItem value="19">7 pm</MenuItem>
          <MenuItem value="20">8 pm</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ minWidth: "100px" }}>{format(date, "EEE, MM/dd")}</div>
      <div style={{ display: "flex" }}>
        {renderDailyHours("start", startHour, (value) =>
          onChangeStartHour(date, value),
        )}
        {renderDailyHours("end", endHour, (value) =>
          onChangeEndHour(date, value),
        )}
      </div>
    </div>
  );
};

export default WorkDay;
