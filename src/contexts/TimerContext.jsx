/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

const DEFAULT_POMODORO = 15;
const DEFAULT_SHORT_BREAK = 5;
const DEFAULT_LONG_BREAK = 10;

const initialValue = {
  pomodoro: DEFAULT_POMODORO,
  shortBreak: DEFAULT_SHORT_BREAK,
  longBreak: DEFAULT_LONG_BREAK,
  longBreakToSec: DEFAULT_LONG_BREAK * 60,
  pomodoroToSec: DEFAULT_POMODORO * 60,
  shortBreakToSec: DEFAULT_SHORT_BREAK * 60,
  isPomodoroStart: false,
  isShortBreakStart: false,
  isLongBreakStart: false,
  tabClicked: "pomodoro",
  font: "font-kumbh",
  color: "bg-red",
  isSettingsApplied: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "settings/pomodoro":
      return {
        ...state,
        pomodoro: +action.payload,
      };
    case "settings/shortbreak":
      return {
        ...state,
        shortBreak: +action.payload,
      };
    case "settings/longbreak":
      return {
        ...state,
        longBreak: +action.payload,
      };

    case "settings/apply":
      return {
        ...state,
        longBreakToSec: state.longBreak * 60,
        pomodoroToSec: state.pomodoro * 60,
        shortBreakToSec: state.shortBreak * 60,
      };

    case "timer/pomodoroStart":
      return {
        ...state,
        isPomodoroStart: !state.isPomodoroStart,
      };

    case "timer/shortbreakStart":
      return { ...state, isShortBreakStart: !state.isShortBreakStart };

    case "timer/longbreakStart":
      return { ...state, isLongBreakStart: !state.isLongBreakStart };

    case "timer/pomodoroRunning":
      return {
        ...state,
        pomodoroToSec: state.pomodoroToSec - 1,
      };

    case "timer/shortbreakRunning":
      return { ...state, shortBreakToSec: state.shortBreakToSec - 1 };

    case "timer/longbreakRunning":
      return { ...state, longBreakToSec: state.longBreakToSec - 1 };

    case "nav/tabChange":
      return {
        ...state,
        tabClicked: action.payload,
        isLongBreakStart: false,
        isShortBreakStart: false,
        isPomodoroStart: false,
        longBreakToSec: state.longBreak * 60,
        pomodoroToSec: state.pomodoro * 60,
        shortBreakToSec: state.shortBreak * 60,
      };

    case "settings/fontchange":
      return { ...state, font: action.payload };

    case "settings/colorchange":
      return { ...state, color: action.payload };

    default:
      throw new Error("Could not find the action type");
  }
}

const TimerContext = createContext();

function TimerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const {
    pomodoro,
    shortBreak,
    longBreak,
    isPomodoroStart,
    pomodoroToSec,
    isLongBreakStart,
    isShortBreakStart,
    longBreakToSec,
    shortBreakToSec,
    tabClicked,
    font,
    color,
  } = state;

  console.log(tabClicked);
  useEffect(
    function () {
      let pomodoroTimer;
      let longBreakTimer;
      let shortBreakTimer;

      if (isPomodoroStart) {
        pomodoroTimer = setInterval(
          () => dispatch({ type: "timer/pomodoroRunning" }),
          1000
        );
      }

      if (isShortBreakStart) {
        shortBreakTimer = setInterval(
          () => dispatch({ type: "timer/shortbreakRunning" }),
          1000
        );
      }

      if (isLongBreakStart) {
        longBreakTimer = setInterval(
          () => dispatch({ type: "timer/longbreakRunning" }),
          1000
        );
      }

      return () => {
        clearInterval(pomodoroTimer);
        clearInterval(longBreakTimer);
        clearInterval(shortBreakTimer);
      };
    },
    [isPomodoroStart, isLongBreakStart, isShortBreakStart]
  );

  return (
    <TimerContext.Provider
      value={{
        pomodoro,
        shortBreak,
        longBreak,
        dispatch,
        isPomodoroStart,
        pomodoroToSec,
        isLongBreakStart,
        isShortBreakStart,
        longBreakToSec,
        shortBreakToSec,
        tabClicked,
        font,
        color,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

// consuming context
function useTimer() {
  const value = useContext(TimerContext);
  if (value === undefined)
    throw new Error("Context was used outside the provider");
  return value;
}

export { TimerProvider, useTimer };
