import "./globals.css";
import { Outfit, Roboto } from "next/font/google";
import type { ReactNode } from "react"; // ① bring in the type

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children, // <- will be typed in the line below
}: {
  children: ReactNode; // ② explicit type instead of implicit `any`
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
