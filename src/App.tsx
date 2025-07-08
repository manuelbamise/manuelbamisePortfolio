import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { useTheme } from "./components/use-theme"
import type { Theme } from "./components/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Card } from "./components/ui/card";
import MarqueeSection from "./components/MarqueeSection";
import ExperienceSection from "./components/ExperienceSection";




function App() {

  const [themeChoice, setThemeChoice] = useState<Theme>("dark");
  const { setTheme, theme } = useTheme()

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    { url: "https://placehold.co/400", rotate: "-rotate-12" },
    { url: "https://placehold.co/400/green/white", rotate: "rotate-6" },
    { url: "https://placehold.co/400/red/white", rotate: "-rotate-3" },
    { url: "https://placehold.co/400/blue/white", rotate: "rotate-12" },
  ];

  useEffect(() => {
    setTheme(themeChoice);
    console.log(theme);

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 300); // timing for shrink before change;
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [themeChoice, setTheme, theme, images.length])

  const toggleTheme = () => {
    setThemeChoice((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const { url, rotate } = images[index];

  return (
    <>
      <div className="bg-white flex-col min-h-screen dark:bg-slate-900">

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

          <div className="mx-20 mt-8 flex items-center">
            <div className="mt-4 w-[50%]">
              <div className="text-5xl mb-2">hi!! I;m hdsjebte</div>
              <div>Creating innovative solutions and captivating designs.
                University student by day, visionary creator by nighI'm a Software Engineer with 3+ years of experience building scalable, secure, and high-performance server-side applications using Node.js, Express.js, and Nest.js. I specialize in creating efficient APIs and microservices, and have contributed to various open-source projects. I'm passionate about making a positive impact and continuously expanding my skills in software engineering.</div>
            </div>
            <div className=" w-[400px]">
              <Card className={`p-4 rounded-none w-full shadow-xl  ${rotate} transition-all duration-300 ease-in-out ${isAnimating ? "scale-90 opacity-0" : "scale-100 opacity-100"
                }`}>
                <img src={url} alt="placeholderImage" />
              </Card>
            </div>
          </div>

          <div className="mt-13 mx-20">
            pMy coding journey kicked off when I was 9 years old. I began with block-based coding on websites like Code.org and Scratch. Eventually, I gained interest in web development and used online resources such as YouTube and Udemy to learn HTML, CSS, and JavaScript. A few years later, when I was 11, I got my first MacBook and wanted to learn iOS development, so I self-learned Swift and SwiftUI. Fast forward to when I was about to turn 13, I found out about the Swift Student Challenge and I started developing an offline app for it. When I submitted it, I thought I had a very slim chance of being one of the 350 winners, but I made it! I even got an offer from Apple to attend WWDC24 in-person. It was a very unique experience in Cupertino, meeting many new people. Right now, I am continuing to build more projects and learn new skills such as Next.js and Python.
          </div>

          <div className="mt-13 mx-20">
            <MarqueeSection />
          </div>

          <div className="mt-13 mx-20">
            <ExperienceSection />
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
