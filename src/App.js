import "./styles.css";
import { useEffect, useState, useCallback } from "react";
import NavLinks from "./Nav/navLinks.js";
import Timer from "./TimerDirectory/timer.js";
import StartStop from "./StartStopDirectory/startStop.js";
import Reset from "./StartStopDirectory/reset.js";
import IncrementDecrement from "./TimerDirectory/incrementDecrement.js";

export default function App() {
  const [mins, setMins] = useState(25);
  const [sec, setSec] = useState(0);
  const [active, setActive] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const [sesLength, setSesLength] = useState(25);
  const [brLength, setBrLength] = useState(5);

  let br = useCallback(() => {
    setMins(brLength);
    setSec(0);
    setBreakTime(true);
  }, [brLength]);

  let ses = useCallback(() => {
    setMins(sesLength);
    setSec(0);
    setBreakTime(false);
  }, [sesLength]);

  useEffect(() => {
    let interval = null;
    if (mins >= 0 && active) {
      interval = setInterval(() => {
        if (mins === 0 && sec === 0) {
          document.getElementById("beep").play();
          !breakTime ? br() : ses();
          setActive(true);
        } else if (mins > 0 && sec <= 0) {
          setSec(59);
          setMins(mins - 1);
        } else {
          setSec(sec - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [mins, sec, active, breakTime, br, ses]);

  function handleReset() {
    document.getElementById("beep").load();

    setSesLength(25);
    setBrLength(5);
    setMins(25);
    setSec(0);
    setBreakTime(false);
    setActive(false);
  }

  function handleClick(e) {
    if (
      (e.target.value === "ses-decr" || e.target.id === "sesD") &&
      sesLength > 1
    ) {
      let newSes = sesLength - 1;
      setSesLength(newSes);
      setMins(newSes);
      setBreakTime(false);
    } else if (
      (e.target.value === "ses-incr" || e.target.id === "sesI") &&
      sesLength < 60
    ) {
      let newSes = sesLength + 1;
      setSesLength(newSes);
      setMins(newSes);
      setBreakTime(false);
    } else if (
      (e.target.value === "br-decr" || e.target.id === "brD") &&
      brLength > 1
    ) {
      let newBr = brLength - 1;
      setBrLength(newBr);
      setMins(newBr);
      setBreakTime(true);
    } else if (
      (e.target.value === "br-incr" || e.target.id === "brI") &&
      brLength < 60
    ) {
      let newBr = brLength + 1;
      setBrLength(newBr);
      setMins(newBr);
      setBreakTime(true);
    }
  }

  return (
    <div className="container text-center my-auto mx-auto">
      <NavLinks breakTime={breakTime} ses={ses} br={br} />
      <Timer breakTime={breakTime} mins={mins} sec={sec} />

      <div className="p-3 bg-secondary w-75 mx-auto rounded-bottom">
        <StartStop active={active} setActive={setActive} />
        <Reset handleReset={handleReset} />
      </div>
      <IncrementDecrement
        handleClick={handleClick}
        sesLength={sesLength}
        brLength={brLength}
      />
    </div>
  );
}
