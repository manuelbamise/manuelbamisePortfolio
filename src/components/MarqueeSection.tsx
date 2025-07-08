import Marquee from "react-fast-marquee";
import reactSvg from "../assets/svg/react.svg"
import nodeSvg from "../assets/svg/nodejs.svg"
import typescriptSvg from "../assets/svg/typescript.svg"
import expressSvg from "../assets/svg/express.svg"
import postgresSvg from "../assets/svg/postgres.svg"
import neovimSvg from "../assets/svg/neovim.svg"
import gitSvg from "../assets/svg/git.svg"
import githubSvg from "../assets/svg/github.svg"
import nestjsSvg from "../assets/svg/nestjs.svg"
import tailwindSvg from "../assets/svg/tailwind.svg"
import ubuntuSvg from "../assets/svg/ubuntu.svg"
import vueSvg from "../assets/svg/vue.svg"
import prismaSvg from "../assets/svg/prisma.svg"


const MarqueeSection = () => {

  return (
    <>
      <Marquee className=" bg-white" pauseOnHover={true}>
        <div className="flex w-[100vw] items-center justify-around">

          <img src={typescriptSvg} alt="typescript svg" />

          <img src={reactSvg} alt="React svg" />
          <img src={vueSvg} alt="vuejs svg" />
          <img src={tailwindSvg} alt="tailwind svg" />

          <img src={nodeSvg} alt="node svg" />
          <img src={expressSvg} alt="express svg" />
          <img src={nestjsSvg} alt="nestjs svg" />

          <img src={postgresSvg} alt="postgres svg" />
          <img src={prismaSvg} alt="prisma svg" />

          <img src={gitSvg} alt="git svg" />
          <img src={githubSvg} alt="github svg" />

          <img src={neovimSvg} alt="neovim svg" />
          <img src={ubuntuSvg} alt="ubuntu svg" />

        </div>
      </Marquee>
    </>
  )
}

export default MarqueeSection;
