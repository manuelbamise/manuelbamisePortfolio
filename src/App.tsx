import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { useTheme } from "./components/use-theme"
import type { Theme } from "./components/theme-provider";
function App() {

  const [themeChoice, setThemeChoices] = useState<Theme>("dark");
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(themeChoice);
    console.log(themeChoice);


  }, [themeChoice, setTheme])

  const toggleTheme = () => {
    setThemeChoices((prev) => (prev === "dark" ? "light" : "dark"))
  }
  return (<>
    <Button onClick={() => toggleTheme()}>
      Button
    </Button>

    <div className="bg-red-700 dark:bg-red-400">
      Hello from app.tsx
    </div></>
  )
}


export default App
