import Link from 'next/link';

const whatsappNumber = "+573154249690";

const ProductBuy = ({ product }) => {

  const message = `Hola Chepicrochet, me interesa el siguiente Amigurumi: ${product.name}, de la colección ${product.category}.`;
  const lastMessage = "Me gustaría obtener más información y asesoramiento sobre este producto.";

  const sendMessage = encodeURIComponent(`${message}\n${lastMessage}`);

  return (
    <Link 
      className='w-2/3 bg-[#f24877] text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300 text-center'
      href={`https://wa.me/${whatsappNumber}?text=${sendMessage}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Comprar Ahora
    </Link>
  );
}

export default ProductBuy;
