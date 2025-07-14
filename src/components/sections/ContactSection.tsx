import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import { Button } from "../ui/button"
import { FaXTwitter } from "react-icons/fa6"


const ContectSection = () => {


  const links = [
    { key: 1, href: "https://x.com/@manuelbamise", logo: <FaXTwitter className="text-6xl" /> },
    { key: 2, href: "https://www.linkedin.com/in/emmanuel-t-5197512b2/", logo: <FaLinkedin /> },
    { key: 3, href: "https://youtube.com/@manuelbamise1", logo: <FaYoutube /> },
    { key: 4, href: "https://t.me/manuelbamise", logo: <FaTelegram /> },
  ]




  return (
    <>

      <div className="flex-col items-center justify-center ">
        <div className="flex-col items-center justify-around text-center ">
          <div className="text-3xl">reach out to me</div>
          <div>fastest way to reach me is by twitter dm or telegram</div>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap mt-4">

          {links && links.map((link) => (

            <Button asChild key={link.key} className="w-[10vw] p-6 bg-white text-black border border-black/10 hover:shadow-2xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:hover:shadow-white dark:border-white/30">
              <a target="_blank" href={link.href} >{link.logo}</a>
            </Button>

          ))}

        </div>
      </div>


    </>
  )
}



export default ContectSection
