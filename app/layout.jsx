import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata = {
  title: "Fashionstorebd.com | RMG Manufacturer Bangladesh",
  description: "Fashionstorebd.com is a ready-made garments manufacturer in Bangladesh producing knit, woven and sweater collections with ethical, sustainable practices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans leading-relaxed antialiased">{children}</body>
    </html>
  );
}
