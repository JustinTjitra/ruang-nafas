import "./globals.css";
// app/layout.tsx
import { Outfit, Roboto } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${outfit.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
