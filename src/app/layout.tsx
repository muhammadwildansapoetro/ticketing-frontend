import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/header/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { template: "MatchTix | %s", default: "MatchTix: Football Ticketing" },
  description:
    " MatchTix is the all-in-one solution for football ticketing. Designed for fans and organizers, it makes creating matches and securing seats effortless.",
  icons: {
    icon: "https://res.cloudinary.com/doiygpguv/image/upload/v1734945038/match-tix/d8nbbqgnrblflcn6ky4w.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        <ToastContainer
          draggable
          closeOnClick
          autoClose={5000}
          position="bottom-right"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
