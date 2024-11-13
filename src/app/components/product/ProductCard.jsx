import Image from 'next/image';
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductBuy from './ProductBuy';

export default function ProductCard({ product, addToCart }) {
  
   return (
      <div className="w-64 h-[440px] mb-5">
         <div className="bg-white shadow-lg shadow-gray-600 rounded-2xl p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="w-full h-60 rounded-lg overflow-hidden mb-4">
                  <Image
                     className="object-cover w-full h-full"
                     src={product.img}
                     alt={product.name}
                     layout="responsive"
                  />
            </div>
            <div className="text-center mb-4">
               <h3 className="font-lato text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
               <p className="font-itim text-md text-gray-500 mb-2">{product.category}</p>
               <p className="font-itim text-md text-gray-500 mb-2">{product.status}</p>
               <p className="font-lato text-xl font-bold text-green-600">Precio: ${product.price}</p>
            </div>
            <div className="flex gap-4 w-full">
               <button
                  className="w-1/3 bg-[#fb9a00] text-white font-bold py-2 rounded-lg hover:bg-[#ffae4a] transition-colors duration-300 flex justify-center items-center"
                  onClick={() => addToCart(product)}
               >
                  <HiOutlineShoppingCart className="text-2xl" />
               </button>
               <ProductBuy product={product} />
            </div>
         </div>
      </div>
   );
}
