import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" onClick={toggleDarkTheme} />
        ) : (
          <BsFillSunFill className="toggle-icon" onClick={toggleDarkTheme} />
        )}
      </button>
    </section>
  );
}
export default ThemeToggle;
