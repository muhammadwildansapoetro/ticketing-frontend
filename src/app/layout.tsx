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
  title: "MatchTix: Football Ticketing",
  description:
    "MatchTix is your ultimate solution for football event ticketing. Discover, book, and manage tickets for your favorite matches with ease. Designed for fans and organizers, MatchTix simplifies the process of creating events, promoting games, and securing seats at the stadium. With user-friendly features, secure transactions, and real-time updates, MatchTix ensures you never miss a moment of the action. Experience the passion of football with seamless ticketing at your fingertips. Join MatchTix today and take your game day to the next level!",
  icons: {
    icon: "/football-field-icon.png",
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
