import { delay } from "./utils";

const saveWorkCalendar = async (
  providerId: string,
  workCalendar: any,
): Promise<boolean> => {
  await delay(1000);
  // TODO: implement backend API call
  return true;
};

export { saveWorkCalendar };
