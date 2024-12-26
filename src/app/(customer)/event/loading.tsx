import { TbSoccerField } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-bounce">
        <div className="flex items-center gap-2 text-2xl font-bold text-accent">
          <TbSoccerField className="h-8 w-8" />
          MatchTix
        </div>
      </div>
    </div>
  );
}