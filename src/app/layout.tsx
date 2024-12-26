import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/header/navBar";
<<<<<<< HEAD
import NavBarMobile from "@/components/footer/mobileNavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "@/context/useSession";
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { template: "MatchTix | %s", default: "MatchTix: Football Ticketing" },
  description:
    "MatchTix is the all-in-one solution for football ticketing. Designed for fans and organizers, it makes creating matches and securing seats effortless.",
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
      <head>
        <Script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.MIDTRANS_CLIENT_KEY}
          strategy="beforeInteractive"
        />
      </head>
      <body className={roboto.className}>
      <SessionProvider>
        <NavBar />
        <ToastContainer
          draggable
          closeOnClick
          autoClose={5000}
          position="bottom-right"
        />
        {children}
        <ToastContainer
          draggable
          closeOnClick
          autoClose={5000}
          theme="dark"
          position="bottom-right"
        />
        <Footer />
        <NavBarMobile />
        </SessionProvider>
      </body>
    </html>
  );
}
