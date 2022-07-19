import { formatTime } from "./formatTime";
import useTimer from "./useTimer";


function App() {
  const { time, startTimer, stopTimer, resetTimer, active, setHistory, lap } = useTimer(0);


  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            ref={active}
            className="button"
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={setHistory}>
            Lap
          </button>
        </div>
        <div className="list-wrapper">
        <ul className="history-list">
          {lap.current.map((index, i)=>{
            let value = index
            i++
            let string = formatTime(value)
            return<li key={i}>Lap {i}/ {string}</li>
          })}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
