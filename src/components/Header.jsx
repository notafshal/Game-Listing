import { useState } from "react";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="flex items-center p-3">
      <img
        src="./Images/logo.png"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        )}
      </div>
    </div>
  );
};
export default Header;
