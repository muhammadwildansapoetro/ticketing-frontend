import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignIn() {
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
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link
        href="#"
        className={`px-3 py-2 text-base font-semibold ${scrolled ? "rounded-lg bg-white text-gray-700" : "rounded-lg bg-accent text-white"}`}
      >
        Sign in <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
}
