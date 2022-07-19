import { useState, useRef } from "react";
// import { formatTime } from "./formatTime";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const isStart = true  
  const active = useRef({disabled: true});
  const refInterval = useRef(0);
  
  const lap = useRef([])

  const setHistory = ()=>{
    if(isStart){
      lap.current.push(time)
    }
  }

  const startTimer = () => {
    if(isStart){
      refInterval.current = setInterval(()=>(setTime(prevTime => prevTime + 1)), 10)
      console.log('start', refInterval.current, active.current)
      active.current.disabled = true
    }
  };
  const stopTimer = () => {
      clearInterval(refInterval.current)
      active.current.disabled = false
      // let newLine = lap.current.push(time)
      
      console.log('stop')
  };
  const resetTimer = () => {
      setTime(0)
      active.current.disabled = false
      lap.current= []
  };

  return { time, startTimer, stopTimer, resetTimer, active, setHistory, lap};
};
export default useTimer;
