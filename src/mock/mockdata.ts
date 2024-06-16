import { format, addMinutes, addHours } from "date-fns";

const users = [
  {
    id: "100100",
    name: "John Doe",
    role: "client",
  },
  {
    id: "200100",
    name: "Jane Doe",
    role: "provider",
  },
];

const startOfNextQuarter = (date: Date) => {
  const minutes = date.getMinutes();
  const nextQuarter = Math.ceil(minutes / 15) * 15;
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    nextQuarter,
  );
};

// not perfect, but good enough for testing...
const generateFutureSlots = (num: number) => {
  const now = new Date();
  const nextQuarter = startOfNextQuarter(addHours(now, 24));
  const slots = [];

  for (let i = 0; i < num; i++) {
    // nextQuarter must be between 8am and 7:45pm:
    const nextQuarterPlus15 = addMinutes(nextQuarter, i * 15);
    if (
      nextQuarterPlus15.getHours() >= 8 &&
      nextQuarterPlus15.getHours() < 20
    ) {
      slots.push({
        id: `slot${i}`,
        date: format(nextQuarterPlus15, "MM/dd/yy"),
        time: format(nextQuarterPlus15, "h:mm a"),
        providerId: "200100", // TODO randomize providers
      });
    }
  }

  return slots;
};

export { users, generateFutureSlots };
