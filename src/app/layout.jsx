import "./globals.css"; 
import { CartProvider } from "../app/components/cart/CartContext";

export const metadata = {
  title: "Chepicrochet Website",
  description: "Descripción de mi proyecto",
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32" },
      { url: "/images/logo.png", sizes: "16x16" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
