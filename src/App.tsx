import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { useTheme } from "./components/use-theme"
import type { Theme } from "./components/theme-provider";
import { Moon, Sun } from "lucide-react";




function App() {

  const [themeChoice, setThemeChoice] = useState<Theme>("dark");
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setTheme(themeChoice);
    console.log(theme);


  }, [themeChoice, setTheme, theme])

  const toggleTheme = () => {
    setThemeChoice((prev) => (prev === "dark" ? "light" : "dark"))
  }
  return (
    <>
      <div className="flex flex-col min-h-screen">

        <main className="flex-1">
          <div className="mt-16 w-full flex justify-center items-center ">
            <Button className={theme == "dark" ? "hidden" : "inline-flex"} size="lg" variant="outline" onClick={toggleTheme}>
              <span className="text-2xl"><Moon /></span>
              toggle dark theme
            </Button>

            <Button className={theme == "light" ? "hidden" : "inline-flex"} size="lg" variant="outline" onClick={toggleTheme}>
              <Sun />
              toggle light theme
            </Button>

          </div>

          <div className="mt-8 mx-5 flex justify-between">
            <div className="w-[50%]">
              <div>hi!! I;m hdsjebte</div>
              <div>Creating innovative solutions and captivating designs.
                University student by day, visionary creator by nighI'm a Software Engineer with 3+ years of experience building scalable, secure, and high-performance server-side applications using Node.js, Express.js, and Nest.js. I specialize in creating efficient APIs and microservices, and have contributed to various open-source projects. I'm passionate about making a positive impact and continuously expanding my skills in software engineering.</div>
            </div>
            <div>images go here</div>
          </div>

          <div className="mt-13">
            pMy coding journey kicked off when I was 9 years old. I began with block-based coding on websites like Code.org and Scratch. Eventually, I gained interest in web development and used online resources such as YouTube and Udemy to learn HTML, CSS, and JavaScript. A few years later, when I was 11, I got my first MacBook and wanted to learn iOS development, so I self-learned Swift and SwiftUI. Fast forward to when I was about to turn 13, I found out about the Swift Student Challenge and I started developing an offline app for it. When I submitted it, I thought I had a very slim chance of being one of the 350 winners, but I made it! I even got an offer from Apple to attend WWDC24 in-person. It was a very unique experience in Cupertino, meeting many new people. Right now, I am continuing to build more projects and learn new skills such as Next.js and Python.
          </div>

          <div className="mt-13">
            carousel goes here
          </div>

          <div className="mt-13">
            <div>Experianece</div>
            <div>Eperience 1, Experience 2</div>
          </div>

          <div className="mt-13">
            <div>Projects</div>
            <div>Project1, Project2, Project3</div>
          </div>

        </main >

        <div className="">
          <div>Footer</div>
          <div>footer info</div>
        </div>
      </div >
    </>
  )
}


export default App
