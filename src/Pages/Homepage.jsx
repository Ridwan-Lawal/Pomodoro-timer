import { IoSettingsSharp } from "react-icons/io5";

import TimerTab from "../components/homepages/TimerTab";
import { Outlet, useNavigate } from "react-router-dom";
import Counters from "../components/homepages/Counters";
import { useTimer } from "../contexts/TimerContext";

function Homepage() {
  const navigate = useNavigate();

  const { dispatch } = useTimer();

  return (
    <div className="flex flex-col items-center justify-between  min-h-screen border-2 border-white py-8 ">
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-[32px] text-lightblue pb-11">pomodoro</h1>
        <TimerTab />
      </div>

      <Counters />

      <button
        className="mt-16"
        onClick={() => {
          dispatch({ type: "settings/applied" });
          navigate("/settings");
        }}
      >
        <IoSettingsSharp className="text-gray-400 text-3xl" />
      </button>
      <Outlet />
    </div>
  );
}

export default Homepage;
