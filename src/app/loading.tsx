import { TbSoccerField } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-bounce">
        <div className="flex items-center gap-2 text-5xl font-bold text-accent">
          <TbSoccerField className="h-16 w-16" />
          MatchTix
        </div>
      </div>
    </div>
  );
}
