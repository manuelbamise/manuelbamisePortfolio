//
// import { FileSpreadsheet, LinkIcon, LucideTelescope, Twitter } from 'lucide-react'
// import { Badge } from './components/ui/badge'
// import { Button } from './components/ui/button'
// import ThemeSwitcher from './lib/theme-config/themeSwitcher'
//
// import img from "@/assets/img/img001.jpeg"
//
// const experiences = [
//   { date: 'Jul 2024 - Present', role: 'Co-Founder', company: 'diepen.io', textColor: 'text-yellow-800', icon: <LinkIcon />, bgColor: 'bg-yellow-300/60' },
// ]
//
// export default function App() {
//   return (
//     <div className="lg:mx-[30%] text-lg">
//
//       <ThemeSwitcher />
//
//       {/* Top Nav */}
//       <div className="flex items-center justify-between border rounded-full px-4 py-2 shadow-sm mb-6">
//         nav goes here
//       </div>
//
//
//       <div className='border'>
//         <img src={img} alt='profile avatar' className='rounded-full overflow-hidden md:h-40 md:w-40 ' />
//       </div>
//
//
//
//       <div className='border mt-4'>
//         <div className='text-5xl font-semibold'>Hey, I'm bamise.</div>
//         <div className='text-4xl font-bold capitalize mt-2'>software engineer and digital creator.</div>
//         <div className='font-thin my-2 text-xl text-gray-700 '>Most developers just follow instructions. I think long-term to ensure your software meets user needs everytime.</div>
//         <div className='flex items-center justify-around mt-8 text-xl'>
//           <Button className='rounded p-4 w-[200px] h-[50px] '>Hire me</Button>
//           <Badge className='rounded-full bg-green-800 p-4 w-[200px] h-[50px] '>
//             <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
//             open to opportunities </Badge>
//         </div>
//       </div>
//
//
//       <div className='border mt-12'>
//         <p className='font-semibold text-2xl'>About</p>
//         <p>I'm bamise. Software engineer with over 6 years of experience based in Nigeria.</p>
//
//         <p className='mt-3'>
//           <span className='font-semibold'>Here's what i actually do:</span> I take half-baked product ideas and turn them into structured, scalable backend systems — with clean APIs, clear role logic, and no loose ends.
//
//         </p>
//         <p className='mt-3'> Most developers just follow instructions. I question assumptions, spot edge cases early, and build like I’ll be maintaining it in five years.
//
//         </p>
//         <p>
//           While others patch features, I architect solutions. Your tech debt shrinks. Your roadmap gets clearer. And things finally make sense — both for devs and users.
//         </p>
//         <p className='mt-3'>i also blog about programming, philosophy and everything in justify-between </p>
//         <p className='mt-3'>When i'm not coding. I'm reading, watching anime or raking up points in AQ3D or CAC. </p>
//         <p>One piece is overrated, watching only isekai doesn't make you an anime fan, Eren yeager was right.</p>
//         <p className='mt-3'>I'm not just a developer. I'm a systems thinker who builds with purpose</p>
//       </div>
//
//
//
//       <div className='flex flex-col items-center justify-center bg-white mt-6 pt-3'>
//         <div className='text-3xl font-semibold text-black'>subscribe to the newsletter</div>
//         <div className='text-lg font-semibold text-black'>subscribe to newsletter</div>
//         <iframe src="https://manuelbamise1.substack.com/embed" width="100%" height="150"   ></iframe>
//       </div>
//
//
//
//       {/* Work Experience */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
//         <ul className="space-y-4">
//           {experiences && experiences.map((exp, index) => (
//             <li key={index} className='flex items-center justify-between'>
//               <div>{exp.date}</div>
//               <div>{exp.role} at <Badge className={`${exp.bgColor} rounded p-4 w-[120px] h-[50px]`}><span className={`${exp.textColor} flex items-center justify-between font-bold w-full`}>{exp.icon} {exp.company}</span></Badge></div>
//             </li>
//           ))}
//         </ul>
//       </div>
//
//       <div className='flex items-center justify-center mt-12'>
//         <Button variant='secondary' size='lg' className=" p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:hover:shadow-white dark:border-white/30" asChild>
//           <a href='https://drive.google.com/file/d/1CIbRQT92-7wCc5oizgOkDFkKJKvM8uE4/view?usp=drive_link' target="_blank"> Download resume <FileSpreadsheet /> </a>
//         </Button></div>
//
//
//       <div className='mt-12 '>
//         <div className='text-2xl font-semibold '>Get in touch</div>
//         <div className='text-lg mb-4 '>
//           Building something that needs to convert? Need a design engineer who actually ships products that make money? I'm down to work on projects that solve real problems. Hit me up if you're serious about results.</div>
//
//         <div className='flex mb-12 items-center justify-around'>
//           <Button
//             className="w-16 h-16 sm:w-30 border sm:h-13  p-4 sm:p-5 rounded-lg flex items-center justify-center bg-white text-black "
//           >          <a href='#'><Twitter /> </a>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

import { FileSpreadsheet, LinkIcon, Twitter } from 'lucide-react'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import ThemeSwitcher from './lib/theme-config/themeSwitcher'
import img from "@/assets/img/img001.jpeg"

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

export default function App() {
  return (
    <div className="container mx-auto px-4 py-6 text-lg text-black dark:text-white">

      <ThemeSwitcher />

      {/* Top Nav */}
      <div className="flex items-center justify-between border rounded-full px-4 py-2 shadow-sm mb-6 dark:border-white/20">
        nav goes here
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
          <Button className="w-48 h-12">Hire me</Button>
          <Badge className="rounded-full bg-green-800 px-4 py-2 text-white flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Open to Opportunities
          </Badge>
        </div>
      </div>

      {/* About Section */}
      <section className="mt-12 space-y-4 text-base leading-relaxed">
        <h3 className="font-semibold text-2xl">About</h3>
        <p>I'm Bamise, a software engineer with over 6 years of experience based in Nigeria.</p>
        <p>
          <span className="font-semibold">Here's what I actually do:</span> I take half-baked product ideas and turn them into structured, scalable backend systems — with clean APIs, clear role logic, and no loose ends.
        </p>
        <p>
          Most developers just follow instructions. I question assumptions, spot edge cases early, and build like I’ll be maintaining it in five years.
        </p>
        <p>
          While others patch features, I architect solutions. Your tech debt shrinks. Your roadmap gets clearer. And things finally make sense — both for devs and users.
        </p>
        <p>I also blog about programming, philosophy and everything in between.</p>
        <p>When I'm not coding, I'm reading, watching anime, or raking up points in AQ3D or CAC.</p>
        <p>One Piece is overrated. Watching only isekai doesn't make you an anime fan. Eren Yeager was right.</p>
        <p>I'm not just a developer. I'm a systems thinker who builds with purpose.</p>
      </section>

      {/* Substack Newsletter */}
      <section className="bg-white dark:bg-white text-black rounded-xl shadow-md p-6 mt-12">
        <h3 className="text-2xl font-semibold text-center mb-2">Subscribe to the newsletter</h3>
        <p className="text-center mb-4">Get updates on coding, product, and anime philosophy</p>
        <iframe
          src="https://manuelbamise1.substack.com/embed"
          width="100%"
          height="150"
          className="w-full bg-white"
          style={{ border: '1px solid #EEE', background: 'white' }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
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
        <p className="mb-4 text-base">
          Building something that needs to convert? Need a design engineer who actually ships products that make money? I'm down to work on projects that solve real problems.
        </p>

        <div className="flex items-center justify-center mb-12">
          <Button className="w-14 h-14 sm:w-16 sm:h-16 p-4 rounded-lg bg-white text-black border shadow hover:bg-gray-100">
            <a href="#"><Twitter /></a>
          </Button>
        </div>
      </section>
    </div>
  )
}

