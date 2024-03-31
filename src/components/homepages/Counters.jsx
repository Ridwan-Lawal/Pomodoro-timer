import { useTimer } from "../../contexts/TimerContext";
import CounterTab from "./CounterTab";

function Counters() {
  const {
    isPomodoroStart,
    dispatch,
    pomodoroToSec,
    isShortBreakStart,
    isLongBreakStart,
    longBreakToSec,
    shortBreakToSec,
    tabClicked,
  } = useTimer();

  return (
    <div>
      {tabClicked === "pomodoro" && (
        <CounterTab
          isStart={isPomodoroStart}
          timeInSec={pomodoroToSec}
          onClick={() => dispatch({ type: "timer/pomodoroStart" })}
        />
      )}

      {tabClicked === "shortbreak" && (
        <CounterTab
          isStart={isShortBreakStart}
          timeInSec={shortBreakToSec}
          onClick={() => dispatch({ type: "timer/shortbreakStart" })}
        />
      )}

      {tabClicked === "longbreak" && (
        <CounterTab
          isStart={isLongBreakStart}
          timeInSec={longBreakToSec}
          onClick={() => dispatch({ type: "timer/longbreakStart" })}
        />
      )}
    </div>
  );
}

export default Counters;
