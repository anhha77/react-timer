import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    timeRecordSaved,
    timeRecord,
    deleteRecord,
  } = useTimer(0);
  return (
    <div className="App container">
      <h1 className="title">Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <div className="time-text-display">
            <span className="time">{formatTime(time).hours}</span>
            <span className="text">Hours</span>
          </div>
          <span className="separator">:</span>
          <div className="time-text-display">
            <span className="time">{formatTime(time).minutes}</span>
            <span className="text">Minutes</span>
          </div>
          <span className="separator">:</span>
          <div className="time-text-display">
            <span className="time">{formatTime(time).seconds}</span>
            <span className="text">Seconds</span>
          </div>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={timeRecordSaved}>
            Split Time
          </button>
        </div>
        <div className="record-contain">
          {timeRecord.map((item) => (
            <div className="record-item" key={item.id}>
              <div className="record">{`${formatTime(item.time).hours} : ${
                formatTime(item.time).minutes
              } : ${formatTime(item.time).seconds}`}</div>
              <button
                className="delete-record"
                onClick={(event) => deleteRecord(event, item.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
