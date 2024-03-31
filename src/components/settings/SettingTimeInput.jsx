/* eslint-disable react/prop-types */
function SettingTimeInput({ htmlFor = "", value, onChange }) {
  return (
    <div className="space-y-2 w-full  ">
      <label
        htmlFor={htmlFor}
        className="font-semibold text-slate-500 text-xs sm:text-sm"
      >
        {htmlFor}
      </label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        max="59"
        id={htmlFor}
        className="p-2 appearance-none text-darkestblue font-semibold w-full text-[15px] rounded-md focus:outline-none bg-grays"
      />
    </div>
  );
}

export default SettingTimeInput;
