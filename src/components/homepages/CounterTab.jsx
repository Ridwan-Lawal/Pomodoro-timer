/* eslint-disable react/prop-types */
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTimer } from "../../contexts/TimerContext";

function CounterTab({ isStart, onClick, timeInSec }) {
  const { color } = useTimer();
  return (
    <div
      onClick={onClick}
      className=" rounded-full group border-slate-800 mt-11"
    >
      <div className="bg-dark bg-gradient-to-tl from-[#222647] to-[#14162e] shadow-counter sm:shadow-counterDesktop  hover:shadow-counterHover  cursor-pointer transition-all duration-300 overflow-hidden p-2.5 md:p-6 rounded-full">
        <div className="w-[260px] rounded-full bg-darkestblue sm:w-[320px] p-2.5 md:w-[350px]">
          <CircularProgressbarWithChildren
            value={66}
            strokeWidth={3.5}
            si
            backgroundPadding={30}
            styles={buildStyles({
              textSize: "32px",
              pathColor: `${color === "bg-red" ? "hsl(0, 91%, 71%)" : ""} ${
                color === "bg-cyan" ? "#70F3F8" : ""
              } ${color === "bg-violet" ? "#D881F8" : ""} `,
              trailColor: "#161932",
            })}
          >
            <div className="flex flex-col items-center justify-center text-center p-10  ">
              <p className="text-lightblue text-[60px] sm:text-[85px] font-bold text-center">
                <span>
                  {String(Math.floor(timeInSec / 60)).padStart(2, "0")}
                </span>
                :
                <span>
                  {String(Math.floor(timeInSec % 60)).padStart(2, "0")}
                </span>
              </p>
              <p className="text-lightblue text-center uppercase text-[14px] sm:text-[19px] tracking-[20px] font-semibold">
                {isStart ? "pause" : "start"}
              </p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}

export default CounterTab;
