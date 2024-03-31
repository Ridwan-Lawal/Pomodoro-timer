import { useTimer } from "../../contexts/TimerContext";
import TabButton from "./TabButton";

function TimerTab() {
  const { dispatch } = useTimer();

  return (
    <nav className=" shadow-md flex justify-between p-1.5 sm:p-2.5 rounded-3xl bg-darkblue gap-2 items-center">
      <TabButton
        btnContent="pomodoro"
        onClick={() => dispatch({ type: "nav/tabChange", payload: "pomodoro" })}
        padding="py-2 px-4 sm:px-8 text-[13px] md:text-[15px]"
      />
      <TabButton
        btnContent="short break"
        onClick={() =>
          dispatch({ type: "nav/tabChange", payload: "shortbreak" })
        }
        padding="py-2 px-4 sm:px-8 text-[13px] md:text-[15px]"
      />
      <TabButton
        btnContent="long break"
        onClick={() =>
          dispatch({ type: "nav/tabChange", payload: "longbreak" })
        }
        padding="py-2 px-4 sm:px-8 text-[13px] md:text-[15px]"
      />
    </nav>
  );
}

export default TimerTab;
