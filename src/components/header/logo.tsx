import Link from "next/link";
import { TbSoccerField } from "react-icons/tb";

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <Link
        href="/"
        className="flex items-center gap-1 p-1.5 text-2xl font-bold text-white hover:text-white/90 lg:text-3xl"
      >
        <TbSoccerField className="size-8 lg:size-10" />
        MatchTix
      </Link>
    </div>
  );
}
