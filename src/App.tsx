import {
  FileSpreadsheet, LinkIcon, Home,
  Music,
  BookOpen,
  ArrowRight
} from 'lucide-react'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import ThemeSwitcher from './lib/theme-config/themeSwitcher'
import img from "@/assets/img/img001.jpeg"
import { BsTelegram, BsTwitterX } from 'react-icons/bs'

const experiences = [
  {
    date: 'Jul 2024 - Present',
    role: 'Co-Founder',
    company: 'diepen.io',
    textColor: 'text-yellow-800',
    icon: <LinkIcon className="w-4 h-4 mr-1" />,
    bgColor: 'bg-yellow-300/60'
  },
]

const icons = [
  { icon: <Home size={20} />, link: '#' },
  { icon: <Music size={20} />, link: '#' },
  { icon: <BookOpen size={20} />, link: '#' },
];


export default function App() {
  return (
    <div className="container mx-auto px-4 py-6 text-lg md:w-[50vw] text-black dark:text-white">

      {/* Top Nav */}
      <div className='flex items-center justify-center'>
        <div className="flex items-center justify-between border rounded-lg px-4 py-2 w-fit space-x-4">
          <div className="flex items-center space-x-4">
            {icons.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <a href={item.link} className="text-gray-800 dark:text-gray-200 hover:text-black">
                  {item.icon}
                </a>
                {(index === 0 || index === 4) && (
                  <div className="h-4 w-px bg-gray-300"></div> // vertical divider
                )}
              </div>
            ))}
          </div>
          < ThemeSwitcher />
        </div>

      </div>
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src={img}
          alt="profile avatar"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border"
        />
      </div>

      {/* Intro */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-semibold">Hey, I'm Bamise.</h1>
        <h2 className="text-2xl sm:text-3xl font-bold capitalize">Software Engineer & Digital Creator</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Most developers just follow instructions. I think long-term to ensure your software meets user needs every time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Button className="w-48 rounded-lg h-12">Hire me</Button>
          <Badge className="rounded-lg bg-green-800/80 dark:bg-green-800 p-4 w-[200px] h-[50px] text-white flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Open to Opportunities
          </Badge>
        </div>
      </div>

      <div className=' mt-12'>
        <p className='font-semibold text-2xl'>About</p>
        <p>I'm bamise. Software engineer with over 6 years of experience based in Nigeria.</p>

        <p className='mt-3'>
          <span className='font-semibold'>Here's what i actually do:</span> I take half-baked product ideas and turn them into structured and scalable backend systems  with clean APIs, clear role logic, and no loose ends.

        </p>
        <p className='mt-3'> Most developers just follow instructions. I question assumptions, spot edge cases early, and build like I’ll be maintaining it in five years.

        </p>
        <p>

          I'm flexible with any tech stack, though I lean toward modern tools. Currently, I work with <span className="font-medium text-blue-600 dark:text-blue-400">React</span>, <span className="font-medium text-green-600 dark:text-green-400">Vue</span>, <span className="font-medium text-pink-600 dark:text-pink-400">NestJS</span>, <span className="font-medium text-purple-600 dark:text-purple-400">Prisma</span>, and <span className="font-medium text-yellow-600 dark:text-yellow-400">TypeScript</span>.

        </p>
        <p className='mt-3'>i also <a href='#' className='hover:text-emerald-500'>blog about programming, philosophy and everything in between</a> </p>
        <p className='mt-3'>When i'm not coding. I'm reading, watching anime or raking up points in AQ3D or chess(I think my ELO rating is at 400 now). </p>
        <span>One piece is overrated, watching only isekai doesn't make you an anime fan, Eren yeager was right.</span>
        <p className='mt-3'>I'm not just a developer. I'm a systems thinker who builds with purpose</p>
      </div>

      {/* Substack Newsletter */}
      <section className="bg-white dark:bg-white text-black rounded-xl shadow-md p-6 mt-12">
        <h3 className="text-2xl font-semibold text-center mb-2">Subscribe to the newsletter</h3>
        <p className="text-center mb-4">Get updates on coding, product, and anime philosophy</p>
        <iframe
          src="https://manuelbamise1.substack.com/embed"
          width="100%"
          height="150"
          className="w-full bg-white mt-14"
        ></iframe>

        <div className='flex items-center justify-center'>
          <Button
            variant="secondary"
            size="lg"
            className="p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-black dark:border-black"
            asChild
          >
            <a
              href="#"
              target="_blank"
            >
              <p>Start reading</p>

              <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
        <ul className="space-y-4">
          {experiences.map((exp, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-gray-600 dark:text-gray-400">{exp.date}</span>
              <span className="flex items-center gap-2">{exp.role} at
                <Badge className={`${exp.bgColor} rounded px-3 py-2`}>
                  <span className={`flex items-center font-semibold ${exp.textColor}`}>
                    {exp.icon} {exp.company}
                  </span>
                </Badge>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Resume Download */}
      <div className="flex justify-center mt-12">
        <Button
          variant="secondary"
          size="lg"
          className="p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:border-white/30"
          asChild
        >
          <a
            href="https://drive.google.com/file/d/1CIbRQT92-7wCc5oizgOkDFkKJKvM8uE4/view?usp=drive_link"
            target="_blank"
          >
            Download resume <FileSpreadsheet className="ml-2" />
          </a>
        </Button>
      </div>

      {/* Contact */}
      <section className="mt-12">
        <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
        <p className="mb-4 text-base">Need a fullstack engineer who can think through your stack and ship without hand-holding?  I'm down to work on projects that solve real problems.</p>

        <div className="flex items-center justify-center mb-12 gap-5">
          <Button
            variant="secondary"
            size="lg"
            className="p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:border-white/30"
            asChild
          >
            <a
              href="#"
              target="_blank"
            >
              <BsTwitterX />
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:border-white/30"
            asChild
          >
            <a
              href="#"
              target="_blank"
            >
              <BsTelegram />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

