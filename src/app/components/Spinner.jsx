import { ColorRing } from 'react-loader-spinner'
import { motion } from 'framer-motion'

export default function Spinner () {

   return (
      <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }} 
       className='flex items-center justify-center h-screen'>
         <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#b4eee8', '#f24877', '#fb9a00', '#1f6c76', '#f24877']}
         />
      </motion.div>
   )
}