import "./globals.css"; 

export const metadata = {
  title: "Landing pages - Chepicrochet.",
  description: "Descripción de mi proyecto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
