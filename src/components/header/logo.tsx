import Link from "next/link";
import { useEffect, useState } from "react";
import { TbSoccerField } from "react-icons/tb";

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex lg:flex-1">
      <Link
        href="#"
        className={`flex items-center gap-1 p-1.5 text-2xl font-black ${scrolled ? "text-white" : "text-accent"} lg:text-3xl`}
      >
        <TbSoccerField className="size-8 lg:size-10" />
        MatchTix
      </Link>
    </div>
  );
}
