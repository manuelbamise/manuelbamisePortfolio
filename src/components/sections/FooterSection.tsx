import { FaCross } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (

    <motion.div className="flex items-center justify-center  md:mt-13 p-6 gap-4"


      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6 }}

    >
      built with faith <FaCross /> by <a href="https://github.com/manuelbamise" className="hover:text-blue-700">bamise</a>

    </motion.div>
  )
}

export default Footer;
