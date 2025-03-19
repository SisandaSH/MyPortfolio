import { FC, useRef } from "react";
import ThemeSwitch from "../hero/ThemeSwitch";
import HeaderItem from "./HeaderItem";
import { navItems } from "./navItems";
import { twMerge } from "tailwind-merge";

interface IProps {
  inView: boolean;
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const Header: FC<IProps> = ({ inView, dark, setDark }) => {
  const header = useRef(null);

  return (
    <header
      className={twMerge(
        "w-full fixed left-0 z-50  h-16  items-center px-4 transition-transform duration-500 bg-body-clr laptop:backdrop-blur-none laptop:bg-body-clr flex shadow-lg shadow-shadow-clr",
        !inView ? "translate-y-0" : "-translate-y-[110%]"
      )}
      ref={header}
    >
      <nav className="flex justify-end items-center gap-4 custom-container">
        <div className="flex justify-between w-full px-8 tablet:px-2 ">
          <ul className="flex gap-8 justify-end items-center text-lg desktop:text-base laptop:justify-between phone:gap-4">
            <HeaderItem title={"Home"} icon={"estate"} href={"home"} />
            {navItems.map((item) => {
              return (
                <HeaderItem
                  title={item.title}
                  icon={item.icon}
                  href={item.href}
                  key={item.title}
                />
              );
            })}
          </ul>
          <div className="scale-150 flex">
            <ThemeSwitch dark={dark} setDark={setDark} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
