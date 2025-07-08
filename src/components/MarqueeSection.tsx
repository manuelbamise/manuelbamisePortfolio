import Marquee from "react-fast-marquee";
import reactSvg from "../assets/svg/react.svg"

const MarqueeSection = () => {

  return (
    <>
      <Marquee>
        <img src={reactSvg} alt="React svg" />

      </Marquee>
    </>
  )
}

export default MarqueeSection;
