import SettingsColorType from "./SettingsColorType";

function SettingColor() {
  return (
    <div className="flex justify-between items-center py-6 px-7">
      <p className="settings-heading">color</p>

      <aside className="flex gap-4">
        <SettingsColorType colorName="bg-red" />
        <SettingsColorType colorName="bg-cyan" />
        <SettingsColorType colorName="bg-violet" />
      </aside>
    </div>
  );
}

export default SettingColor;
