import { motion } from 'framer-motion'

export default function Shadow() {
   return (
      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }} >
         <span className="absolute top-44 left-32 shadow-[0px_0px_150px_150px_#1f6c76]" />
         <span className="absolute right-48 bottom-28 shadow-[0px_0px_150px_150px_#fb9a00]" />
         <span className="absolute right-[530px] top-52 shadow-[0px_0px_150px_200px_#b4eee8]" />
         <span className="absolute top-[350px] left-[400px] shadow-[0px_0px_120px_180px_#f24877]" />
      </motion.div>
   )
}