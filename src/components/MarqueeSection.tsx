import Marquee from "react-fast-marquee";
import reactSvg from "../assets/svg/react.svg"
import nodeSvg from "../assets/svg/nodejs.svg"
import typescriptSvg from "../assets/svg/typescript.svg"
import expressSvg from "../assets/svg/express.svg"



const MarqueeSection = () => {

  return (
    <>
      <Marquee>
        <img src={reactSvg} alt="React svg" />

        <img src={nodeSvg} alt="node svg" />
        <img src={typescriptSvg} alt="typescript svg" />

        <img src={expressSvg} alt="express svg" />
      </Marquee>
    </>
  )
}

export default MarqueeSection;
