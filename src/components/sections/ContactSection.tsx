
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaXTwitter } from "react-icons/fa6";

const ContectSection = () => {
  const links = [
    {
      key: 1,
      href: "https://x.com/@manuelbamise",
      logo: <FaXTwitter className="text-4xl md:text-5xl" />,
    },
    {
      key: 2,
      href: "https://www.linkedin.com/in/emmanuel-t-5197512b2/",
      logo: <FaLinkedin className="text-4xl md:text-5xl" />,
    },
    {
      key: 3,
      href: "https://youtube.com/@manuelbamise1",
      logo: <FaYoutube className="text-4xl md:text-5xl" />,
    },
    {
      key: 4,
      href: "https://t.me/manuelbamise",
      logo: <FaTelegram className="text-4xl md:text-5xl" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 space-y-6">
      <div className="text-center space-y-2">
        <div className="text-2xl md:text-3xl font-semibold">Reach out to me</div>
        <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          Fastest way to reach me is by Twitter DM or Telegram
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {links.map((link) => (
          <Button
            asChild
            key={link.key}
            className="w-16 h-16 sm:w-20 sm:h-20 p-4 sm:p-5 rounded-lg flex items-center justify-center bg-white text-black border border-black/10 hover:shadow-xl hover:bg-transparent hover:border-black dark:bg-transparent dark:text-white dark:hover:shadow-white dark:border-white/30"
          >
            <a target="_blank" rel="noopener noreferrer" href={link.href}>
              {link.logo}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ContectSection;
