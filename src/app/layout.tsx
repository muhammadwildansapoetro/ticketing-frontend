import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar";

export const metadata: Metadata = {
  title:
    "MatchTix App: Connecting Matches and Fans - Hub for Creating and Attending Events",
  description:
    "MatchTix is your ultimate solution for football event ticketing. Discover, book, and manage tickets for your favorite matches with ease. Designed for fans and organizers, MatchTix simplifies the process of creating events, promoting games, and securing seats at the stadium. With user-friendly features, secure transactions, and real-time updates, MatchTix ensures you never miss a moment of the action. Experience the passion of football with seamless ticketing at your fingertips. Join MatchTix today and take your game day to the next level!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
