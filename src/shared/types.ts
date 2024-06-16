export interface Slot {
  id: string;
  date: string;
  time: string;
  isReserved: boolean;
}

export interface WorkDayData {
  date: string; // Use ISO string to represent date
  startHour: string;
  endHour: string;
}
