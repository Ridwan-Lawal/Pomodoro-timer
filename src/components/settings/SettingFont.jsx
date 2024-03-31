import SettingsFontType from "./SettingsFontType";

function SettingFont() {
  return (
    <div className="flex justify-between border-b items-center py-6 px-7">
      <p className="settings-heading">Font</p>

      <aside className="flex gap-4">
        <SettingsFontType fontName="font-kumbh" />
        <SettingsFontType fontName="font-robotoSlab" />
        <SettingsFontType fontName="font-spaceMono" />
      </aside>
    </div>
  );
}

export default SettingFont;
