/* eslint-disable react/prop-types */

import { useTimer } from "../../contexts/TimerContext";

function TabButton({ btnContent = "button", padding = "py-2 px-8", onClick }) {
  const { tabClicked, color } = useTimer();

  return (
    <button
      onClick={onClick}
      className={`${
        tabClicked === btnContent.split(" ").join("")
          ? `${color} text-darkestblue`
          : "text-white"
      }  ${padding} font-extrabold transition-colors  rounded-3xl`}
    >
      {btnContent}
    </button>
  );
}

export default TabButton;
