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


const MarqueeSection = () => {

  return (
    <>
      <Marquee className=" outline outline-black bg-white">
        <div className="flex w-[1800px] items-center justify-between">

          <img src={reactSvg} alt="React svg" />

          <img src={nodeSvg} alt="node svg" />
          <img src={typescriptSvg} alt="typescript svg" />

          <img src={expressSvg} alt="express svg" />
          <img src={postgresSvg} alt="postgres svg" />
          <img src={neovimSvg} alt="postgres svg" />
          <img src={gitSvg} alt="postgres svg" />
          <img src={githubSvg} alt="postgres svg" />
          <img src={nestjsSvg} alt="postgres svg" />
          <img src={tailwindSvg} alt="postgres svg" />
          <img src={ubuntuSvg} alt="postgres svg" />
          <img src={vueSvg} alt="postgres svg" />

        </div>
      </Marquee>
    </>
  )
}

export default MarqueeSection;
