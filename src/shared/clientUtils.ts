import { generateFutureSlots } from "../mock/mockdata";
import { delay } from "./utils";

const getClientSlots = async (): Promise<any> => {
  await delay(1000);
  return generateFutureSlots(100);
};

const makeReservation = async (
  clientId: string,
  slotId: string,
): Promise<boolean> => {
  await delay(1000);
  // TODO: implement backend API call
  return true;
};

const confirmReservation = async (
  clientId: string,
  slotId: string,
): Promise<boolean> => {
  await delay(1000);
  // TODO: implement backend API call
  return true;
};

export { getClientSlots, makeReservation, confirmReservation };
