import { useCart } from '../header/CartContext';

export default function AddCart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="w-[450px] md:rounded-br-xl md:rounded-bl-xl flex flex-col items-center gap-4 font-lato text-lg text-[#1f6c76] font-bold bg-white shadow-md p-4 absolute right-0 xl:right-10 2xl:right-[420px] top-[70px] z-40">
      <h2 className="text-2xl mb-4">Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-2 mb-2 w-full">
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
}
