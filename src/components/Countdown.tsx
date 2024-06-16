import React, { useState, useEffect } from "react";

const Countdown = ({ startingMins = 0 }) => {
  const [minutes, setMinutes] = useState(startingMins);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timerInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [minutes, seconds]);

  return (
    <b>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </b>
  );
};

export default Countdown;
