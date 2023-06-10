import { useEffect, useState } from "react";
import components from "./components/index";
import { getTheme } from "./services/themeService";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const isDark = getTheme();
    setDarkTheme(isDark);
  }, []);

  return (
    <div className={isDarkTheme ? `dark` : ""}>
      <div className="bg-lighter-gray dark:bg-navy-blue">
        <components.Navbar
          setDarkTheme={setDarkTheme}
          isDarkTheme={isDarkTheme}
        />
        <components.HeroSection />
        <components.About />
        <components.WorkSection />
        <components.Contact />
        <components.Footer />
      </div>
    </div>
  );
}

export default App;
