import { createFileRoute } from '@tanstack/react-router'
import img from '@/assets/img/img001.jpeg'
import { Button } from '@/components/ui/button'
import { BsDiscord, BsGithub, BsLinkedin, BsSubstack, BsTelegram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs'

export const Route = createFileRoute('/links')({
  component: RouteComponent,
})

function RouteComponent() {

  const bottomLinks = [
    { component: <BsYoutube />, location: 'https://youtube.com/@manuelbamise1' },
    { component: <BsLinkedin />, location: 'https://www.linkedin.com/in/emmanuel-t-5197512b2/' },
    { component: <BsTiktok />, location: 'https://www.tiktok.com/@manuelbamise' },
    { component: <BsDiscord />, location: 'https://discord.gg/kEzbbUJCJd' },
    { component: <BsTwitterX />, location: 'https://x.com/@manuelbamise' },
  ]

  const mainLinks = [
    { component: <BsGithub />, location: 'https://github.com/manuelbamise', text: 'checkout my projects' },
    { component: <BsTelegram />, location: 'https://t.me/manuelbamise', text: 'send me a DM' },
    { component: <BsSubstack />, location: 'https://manuelbamise1.substack.com/', text: 'read my articles' },
    // { component: <BsSpotify />, location: '#', text: 'podcast on spotify' },
  ]



  return <>
    <div className="container mx-auto px-4 py-6 text-lg md:w-[50vw] text-black dark:text-white">

      {/* Profile Image */}
      <div className="flex flex-col items-center justify-center mb-6">
        <img
          src={img}
          alt="profile avatar"
          className="rounded-full w-25 h-25 md:w-30 md:h-30 object-cover border"
        />
      </div>

      <div className='flex flex-col items-center justify-center gap-2'>

        <p className='font-semibold text-2xl'>bamise</p>
        <p>Software engineer & Digital creator</p>
      </div>

      <div className='flex flex-col items-center justify-center gap-2 mt-10 border '>

        {mainLinks && mainLinks.map((link, index) => (
          <Button
            key={index}
            size="lg"
            className="h-16 md:w-[50%] text-xl font-normal"
            asChild
          >
            <a
              href={link.location}
              target="_blank"
            >
              {link.text}

              {link.component}
            </a>

          </Button>


        ))}
      </div>

      <div className="flex items-center justify-center mt-12 gap-5">

        {bottomLinks && bottomLinks.map((btn, index) => (
          <Button
            key={index}
            size="lg"
            className="p-6 "
            asChild
          >
            <a
              href={btn.location}
              target="_blank"
            >
              {btn.component}
            </a>
          </Button>


        ))}
      </div>

    </div>




  </>
}
