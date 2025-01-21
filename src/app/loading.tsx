import { TbSoccerField } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-bounce">
        <div className="flex items-center gap-1 text-2xl font-bold text-accent lg:text-4xl">
          <TbSoccerField className="h-8 w-8 lg:h-14 lg:w-14" />
          MatchTix
        </div>
      </div>
    </div>
  );
}
