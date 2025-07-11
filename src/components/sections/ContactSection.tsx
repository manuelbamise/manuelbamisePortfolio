import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"
import { Button } from "../ui/button"
import { FaXTwitter } from "react-icons/fa6"


const ContectSection = () => {


  const links = [
    { key: 1, href: "https://x.com/@manuelbamise", logo: <FaXTwitter className="text-6xl" /> },
    { key: 2, href: "#", logo: <FaLinkedin /> },
    { key: 3, href: "https://youtube.com/@manuelbamise1", logo: <FaYoutube /> },
    { key: 4, href: "#", logo: <FaTelegram /> },
    { key: 5, href: "https://github.com/manuelbamise", logo: <FaGithub /> },
  ]




  return (
    <>

      <div className="flex-col items-center justify-center ">
        <div className="flex-col items-center justify-around text-center ">
          <div className="text-3xl">contact </div>
          <div>here's how you can reach out to me</div>
        </div>
        <div className="flex items-center justify-center gap-10 flex-wrap mt-4 outline">

          {links && links.map((link) => (

            <Button asChild key={link.key} className="w-[10vw] p-6">
              <a target="_blank" href={link.href} >{link.logo}</a>
            </Button>

          ))}

        </div>
      </div>


    </>
  )
}



export default ContectSection
