import { useNavigate } from "react-router-dom";
import { useTimer } from "../../contexts/TimerContext";
import SettingColor from "./SettingColor";
import SettingFont from "./SettingFont";
import SettingTime from "./SettingTime";
import SettingsNav from "./SettingsNav";

function Settings() {
  const navigate = useNavigate();
  const { dispatch } = useTimer();

  return (
    <div className="bg-black w-screen bg-opacity-40 h-screen fixed top-0 flex justify-center items-center px-5">
      <div className="border w-full rounded-2xl text-darkestblue bg-white max-w-xl mx-auto">
        <SettingsNav />
        <SettingTime />
        <SettingFont />
        <SettingColor />
        <section
          onClick={() => dispatch({ type: "settings/apply" })}
          className="relative top-5  flex justify-center"
        >
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-red text-white py-2.5 px-10 font-semibold   rounded-3xl"
          >
            Apply
          </button>
        </section>
      </div>
    </div>
  );
}

export default Settings;
