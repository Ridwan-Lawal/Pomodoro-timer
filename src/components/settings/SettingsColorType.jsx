/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";
import { useTimer } from "../../contexts/TimerContext";

function SettingsColorType({ colorName = "bg-reds" }) {
  const { dispatch, color } = useTimer();
  return (
    <p
      onClick={() =>
        dispatch({ type: "settings/colorchange", payload: colorName })
      }
      className={`${colorName} font-kumbh text-white w-fit p-2 text-sm cursor-pointer rounded-full  font-bold`}
    >
      <FaCheck
        className={`${
          color === colorName ? "opacity-100" : "opacity-0"
        } text-[17px]`}
      />
    </p>
  );
}

export default SettingsColorType;
