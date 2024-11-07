import Link from 'next/link';

const CartSummary = ({ total, cartMessage, whatsappNumber }) => {
  const message = "Hola Chepicrochet, me interesan los siguientes Amigurumis:";
  const lastMessage = "Me gustaría obtener más información y asesoramiento sobre estos productos.";
  const sendMessage = encodeURIComponent(`${message}\n${cartMessage}\n${lastMessage}`);

  return (
    <div className='flex gap-28 items-center'>
      <div className="w-full flex items-center ">
        <span className="text-xl">Total:</span>
        <span className="text-xl">{total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
      </div>
      <Link 
        className='bg-[#f14a78] px-5 py-2 rounded-lg text-white'
        href={`https://wa.me/${whatsappNumber}?text=${sendMessage}`}>
          Comprar
      </Link>
    </div>
  );
};

export default CartSummary;
