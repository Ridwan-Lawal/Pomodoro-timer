import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SettingsNav() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center border-b   py-5 px-7 ">
      <p className="font-bold text-2xl text-darkestblue">Settings</p>
      <button onClick={() => navigate(-1)}>
        <IoClose className="text-gray-500 text-[21px]" />
      </button>
    </nav>
  );
}

export default SettingsNav;
