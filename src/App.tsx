import { useEffect, useState } from "react";
import { Card } from "./components/ui/card";
import img1 from "./assets/img/img001.jpeg"
import ContactSection from "./components/sections/ContactSection";
import MarqueeSection from "./components/sections/MarqueeSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import { Button } from "./components/ui/button";
import { Briefcase, FileSpreadsheet } from "lucide-react";


function App() {

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    { url: img1, rotate: "-rotate-12" },
    { url: img1, rotate: "rotate-6" },
    { url: img1, rotate: "-rotate-3" },
    { url: img1, rotate: "rotate-12" },
  ];

  useEffect(() => {

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 300); // timing for shrink before change;
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length])

  const { url, rotate } = images[index];
  const currentYear = new Date().getFullYear()
  const age = currentYear - 2006

  return (
    <>
      <div className=" flex-col  dark:bg-stone-950 mb-4">

        <main className="flex-1">

          <div className="px-6 md:px-20 mt-8 flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="w-full md:w-1/2 mt-4 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-bold mb-2">bamise.</div>
              <div className="text-xl md:text-3xl text-gray-600 dark:text-gray-300">
                a {age} year old software engineer who likes to build things.
              </div>
            </div>

            {/* Image Card Section */}
            <div className="w-full sm:w-[300px] md:w-[400px]">
              <Card
                className={`p-4 rounded-none w-full shadow-xl transition-all duration-300 ease-in-out
        ${rotate} ${isAnimating ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
              >
                <img src={url} alt="placeholderImage" className="w-full h-auto object-cover" />
              </Card>
            </div>
          </div>

          <div className="mt-13 mx-20 flex items-center justify-center">
            <Button variant='secondary' size='lg' className=" p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:hover:shadow-white dark:border-white/30">Download resume <FileSpreadsheet />  </Button>
          </div>

          <div className="px-6 md:px-20 mt-10 space-y-3 text-base md:text-lg leading-relaxed">
            <p>
              <span className="font-semibold">Hey!</span> I'm <span className="font-bold">Emmanuel Oluwabamise Tobi</span>, an undergraduate Computer Science student and full-stack engineer who loves turning ideas into real, working products.
            </p>
            <p>
              I'm a <span className="italic">self-taught developer</span> with over <span className="font-semibold">6 years of experience</span> based in Nigeria.
            </p>
            <p>
              I began learning to code in <span className="font-semibold">2019</span>, even before I entered university to study Computer Science. While the classroom taught me theory, I taught myself the real-world skills that power modern software.
            </p>
            <p>
              I'm flexible with any tech stack, though I lean toward modern tools. Currently, I work with <span className="font-medium text-blue-600 dark:text-blue-400">React</span>, <span className="font-medium text-green-600 dark:text-green-400">Vue</span>, <span className="font-medium text-pink-600 dark:text-pink-400">NestJS</span>, <span className="font-medium text-purple-600 dark:text-purple-400">Prisma</span>, and <span className="font-medium text-yellow-600 dark:text-yellow-400">TypeScript</span>.
            </p>

            <p>
              <span className="font-semibold">My mission</span> is to build tools that matter, share my process openly, inspire others and eventually get recognized as a thought leader in the industry
            </p>

            <div>
              <p>I’m currently available for internships, full-time opportunities, and freelance projects.</p>
              <p> If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!</p></div>
            <Button variant='secondary' size='lg' className=" p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:hover:shadow-white dark:border-white/30" asChild>
              <a target="_blank" href="mailto:emmabamise1930@gmail.com?subject=Interested%20in%20Hiring%20You"> <Briefcase /> Hire Me</a>
            </Button>
          </div>

          <div className="mt-13 mx-20">
            <MarqueeSection />
          </div>

          <div className="mt-13 mx-20">
            <ExperienceSection />
          </div>

          <div className="mt-13 mx-20">
            <ContactSection />
          </div>


        </main >

      </div >
    </>
  )
}


export default App
