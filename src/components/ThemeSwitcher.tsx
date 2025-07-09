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
    // console.log(theme);


  }, [themeChoice, setTheme, theme])


  const toggleTheme = () => {
    setThemeChoice((prev) => (prev === "dark" ? "light" : "dark"))
  }



  return (<>
    <div className="mt-10 w-full flex justify-center items-center ">
      <Button className={theme == "dark" ? "hidden" : "inline-flex"} size="lg" variant="outline" onClick={toggleTheme}>
        <span className="text-2xl"><Moon /></span>
      </Button>

      <Button className={theme == "light" ? "hidden" : "inline-flex"} size="lg" variant="outline" onClick={toggleTheme}>
        <Sun />
      </Button>

    </div>



  </>)
}


export default ThemeSwitcher;
