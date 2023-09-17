import { Outfit } from "next/font/google";
import "@/styles/tailwind.css";
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="" />
        <title>Create Product</title>
      </head>
      <body className={`bg-gray-300 ${outfit.className}`}>{children}</body>
    </html>
  );
}
