import { useTimer } from "../../contexts/TimerContext";
import SettingTimeInput from "./SettingTimeInput";

function SettingTime() {
  const { pomodoro, shortBreak, longBreak, dispatch } = useTimer();
  return (
    <div className="space-y-5 border-b py-6 px-7">
      <p className="settings-heading ">Time (minutes)</p>

      <form action="" className="flex items-center gap-6">
        <SettingTimeInput
          htmlFor="pomodoro"
          value={pomodoro}
          onChange={(e) =>
            dispatch({
              type: "settings/pomodoro",
              payload: e.target.value,
            })
          }
        />
        <SettingTimeInput
          htmlFor="short break"
          value={shortBreak}
          onChange={(e) =>
            dispatch({ type: "settings/shortbreak", payload: e.target.value })
          }
        />

        <SettingTimeInput
          htmlFor="long break"
          value={longBreak}
          onChange={(e) =>
            dispatch({ type: "settings/longbreak", payload: e.target.value })
          }
        />
      </form>
    </div>
  );
}

export default SettingTime;
