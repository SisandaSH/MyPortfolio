import { FC, useEffect, useRef } from "react";
import PropTypes from "prop-types";

interface IProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const ThemeSwitch: FC<IProps> = ({ dark, setDark }) => {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref.current)
      dark
        ? ref.current.classList.add("animate-rotate")
        : ref.current.classList.remove("animate-rotate");
  }, [dark]);

  return (
    <button
      ref={ref}
      className={
        "transition-transform duration-500 self-end hover:scale-110 will-change-transform"
      }
      onClick={() => setDark(!dark)}
    >
      {dark ? <i className="bx bx-moon"></i> : <i className="bx bx-sun"></i>}
    </button>
  );
};

export default ThemeSwitch;
