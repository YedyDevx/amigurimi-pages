import { ColorRing } from 'react-loader-spinner'

export default function Spinner () {

   return (
      <div className='flex items-center justify-center h-screen'>
         <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#b4eee8', '#f24877', '#fb9a00', '#1f6c76', '#f24877']}
         />
      </div>
   )
}