
import {
  Home,
  Github,
  Music,
  BookOpen,
  Linkedin
} from 'lucide-react'

const socialIcons = [
  { icon: <Home className="w-5 h-5" />, href: '#' },
  { icon: <Github className="w-5 h-5" />, href: '#' },
  { icon: <Music className="w-5 h-5" />, href: '#' },
  { icon: <BookOpen className="w-5 h-5" />, href: '#' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#' }
]

const experiences = [
  { date: 'Jul 2024 - Present', role: 'Co-Founder', company: 'diepen.io', color: 'bg-yellow-300' },
  { date: 'Dec 2022 - Present', role: 'Educator', company: 'Miraya Tech', color: 'bg-pink-300' },
  { date: 'Aug 2024 - Jun 2025', role: 'Frontend Dev', company: 'Heisenware', color: 'bg-blue-200' },
  { date: 'Aug 2023 - Aug 2024', role: 'Full Stack Dev', company: 'Viind', color: 'bg-blue-200' },
  { date: 'Mar 2022 - Aug 2023', role: 'Frontend Dev', company: 'CHECK24', color: 'bg-blue-200' },
  { date: 'Jan 2020 - Dec 2021', role: 'Tattoo Artist', company: '', color: '' }
]

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      {/* Top Nav */}
      <div className="flex items-center justify-between border rounded-full px-4 py-2 shadow-sm mb-6">
        <div className="flex space-x-4">
          {socialIcons.map((item, i) => (
            <a key={i} href={item.href} className="hover:text-gray-700">
              {item.icon}
            </a>
          ))}
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
          Book a call
        </button>
      </div>

      {/* Profile Section */}
      <div className="text-center">
        <img
          src="https://i.imgur.com/rsYhA3G.png" // replace with actual image path or imported image
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-1">Hey, I'm Miraya.<br />Engineer & Designer.</h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
          Most designers can't code. Most developers can't design. I do both.
          <br />
          3 years turning ideas into profitable products.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            Hire me
          </button>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            Open to Opportunities
          </span>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <ul className="space-y-4">
          {experiences.map((exp, i) => (
            <li key={i} className="flex justify-between text-sm text-gray-700">
              <span className="w-1/3 text-gray-400">{exp.date}</span>
              <span className="w-2/3 flex justify-between">
                <span>{exp.role}</span>
                {exp.company && (
                  <a
                    href="#"
                    className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${exp.color}`}
                  >
                    {exp.company}
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

