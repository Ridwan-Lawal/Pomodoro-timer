/* eslint-disable react/prop-types */
import { useTimer } from "../../contexts/TimerContext";

function SettingsFontType({ fontName = "font-kumbh" }) {
  const { dispatch, font } = useTimer();
  return (
    <p
      onClick={() =>
        dispatch({ type: "settings/fontchange", payload: fontName })
      }
      className={`${
        font === fontName ? "text-grays bg-darkblue" : "bg-grays text-darkblue"
      }  font-spaceMono transition-colors cursor-pointer font-bold w-fit py-2 px-2.5 text-sm rounded-full`}
    >
      Aa
    </p>
  );
}

export default SettingsFontType;
