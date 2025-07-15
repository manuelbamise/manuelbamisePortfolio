import { motion } from "framer-motion";

const NotFound = () => {

  return (

    <>
      <motion.div className="flex items-center justify-center mt-13 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className=" flex-col text-center dark:border dark:border-white rounded-lg shadow-xl p-6">

          <div className="text-5xl font-bold">
            404 – Page Not Found
          </div>
          <div className="text-gray-700 dark:text-white mt-6">Oops! The page you're looking for doesn't exist.</div>

          <div className=" mt-2">
            <div> Try checking the address again or head back to the homepage.</div>

          </div>
        </div>
      </motion.div>
    </>
  )
}

export default NotFound;
