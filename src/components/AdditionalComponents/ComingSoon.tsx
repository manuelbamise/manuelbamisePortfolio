import { motion } from "framer-motion";

const ComingSoonComponent = () => {
  return (
    <>
      <motion.div className="flex items-center justify-center mt-13 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className=" flex-col text-center dark:border dark:border-white rounded-lg shadow-xl p-6">

          <div className="text-5xl font-bold">Coming Soon</div>
          <div className="text-gray-700 dark:text-white mt-6">This page is still under construction.</div>

        </div>
      </motion.div>
    </>
  )
}


export default ComingSoonComponent;
