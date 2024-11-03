import AnimatedShinyText from "../../../components/ui/animated-shiny-text"
import ProductsAll from "../home/ProductAll"
import Footer from "../Footer"

const listCollection = [
   {
      collection: 'Todos'
   },
   {
      collection: 'Animalitos'
   },
   {
      collection: 'Anime'
   },
   {
      collection: 'Artistas'
   },
   {
      collection: 'Caricaturas'
   },
   {
      collection: 'Heroes'
   },
   {
      collection: 'Flores'
   },
   {
      collection: 'Llaveros'
   },
   {
      collection: 'Personalizados'
   }
]

export default function ListCollections () {
   return(
      <div>
         <div className="flex flex-col items-center gap-3 mb-5 text-[#1f6c76]">
            <div className="font-lato text-3xl font-bold">NUESTRA COLECCION AMIGURUMIS</div>
            <AnimatedShinyText>
               <div className="font-itim text-xl w-full ">Amigurimis que tenemos disponibles:</div>
            </AnimatedShinyText>
         </div>
         <div className="flex flex-wrap gap-6 justify-center items-center p-3 rounded-xl mx-16 shadow-lg shadow-gray-500">
            {listCollection.map((item, index) => (
               <div 
               key={index}
               className="font-lato cursor-pointer rounded-md text-[#1f6c76] font-bold px-6 py-2 hover:bg-[#1f6c76] hover:text-gray-50" >
                  {item.collection}
               </div>
            ))}
         </div>
            <ProductsAll/>
            <Footer/>
      </div>
   )
}