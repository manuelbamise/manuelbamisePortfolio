import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./use-theme";
import type { Theme } from "./themeProvider.tsx";


const ThemeSwitcher = () => {

  const [themeChoice, setThemeChoice] = useState<Theme>("dark");
  const { setTheme, theme } = useTheme()


  useEffect(() => {
    setTheme(themeChoice);

  }, [themeChoice, setTheme, theme])

  const toggleTheme = () => {
    setThemeChoice((prev) => (prev === "dark" ? "light" : "dark"))
  }


  return (<>
    <div className="w-full flex justify-center items-center ">
      <Button className={theme == "dark" ? "hidden" : "inline-flex  bg-black hover:bg-black/10 text-white"} size="lg" variant="outline" onClick={toggleTheme}>
        <span className="text-2xl"><Moon /></span>
      </Button>

      <Button className={theme == "light" ? "hidden" : "inline-flex dark:bg-white dark:text-black dark:hover:text-white "} size="lg" variant="outline" onClick={toggleTheme}>
        <Sun />
      </Button>

    </div>

  </>)
}


export default ThemeSwitcher;
