import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [timeRecord, setTimeRecord] = useState([]);

  // const isStart = "Your code here";
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      console.log("hi");
      setTime((time) => time + 1);
    }, 1000);
    active.current.classList.add("selected");
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.classList.remove("selected");
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.classList.remove("selected");
    active.current.disabled = false;
  };
  const timeRecordSaved = () => {
    const newTimeRecord = {
      time: time,
      id: Date.now(),
    };
    setTimeRecord([...timeRecord, newTimeRecord]);
  };
  const deleteRecord = (event, i) => {
    console.log(i);
    event.target.parentNode.classList.add("fall");
    event.target.parentNode.addEventListener("transitionend", () => {
      setTimeRecord(
        timeRecord.filter((item) => {
          if (item.id === i) return false;
          return true;
        })
      );
    });
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    timeRecordSaved,
    timeRecord,
    deleteRecord,
  };
};
export default useTimer;
