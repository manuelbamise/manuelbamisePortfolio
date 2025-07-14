import Marquee from "react-fast-marquee";
import reactSvg from "../../assets/svg/react.svg"
import nodeSvg from "../../assets/svg/nodejs.svg"
import typescriptSvg from "../../assets/svg/typescript.svg"
import expressSvg from "../../assets/svg/express.svg"
import postgresSvg from "../../assets/svg/postgres.svg"
import neovimSvg from "../../assets/svg/neovim.svg"
import gitSvg from "../../assets/svg/git.svg"
import githubSvg from "../../assets/svg/github.svg"
import nestjsSvg from "../../assets/svg/nestjs.svg"
import tailwindSvg from "../../assets/svg/tailwind.svg"
import ubuntuSvg from "../../assets/svg/ubuntu.svg"
import vueSvg from "../../assets/svg/vue.svg"
import prismaSvg from "../../assets/svg/prisma.svg"


const techStack = [
  typescriptSvg, reactSvg, vueSvg, tailwindSvg,
  nodeSvg, expressSvg, nestjsSvg,
  postgresSvg, prismaSvg,
  gitSvg, githubSvg,
  neovimSvg, ubuntuSvg,
];



const MarqueeSection = () => {

  return (
    <>
      <div className="w-full py-6">
        <Marquee pauseOnHover={true} gradient={true} gradientWidth={50} >
          <div className="flex items-center gap-8 justify-around px-4 outline lg:w-[100vw] w-full">
            {techStack.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="tech icon"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default MarqueeSection;
