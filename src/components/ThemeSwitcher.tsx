import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./use-theme";
import type { Theme } from "./theme-provider";


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
      <Button className={theme == "dark" ? "hidden" : "inline-flex bg-black hover:bg-black/10 text-white"} size="lg" variant="outline" onClick={toggleTheme}>
        <span className="text-2xl"><Moon /></span>
      </Button>

      <Button className={theme == "light" ? "hidden" : "inline-flex bg-red-700"} size="lg" variant="outline" onClick={toggleTheme}>
        <Sun />
      </Button>

    </div>

  </>)
}


export default ThemeSwitcher;
